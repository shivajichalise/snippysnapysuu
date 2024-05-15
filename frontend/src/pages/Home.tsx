import { useState, useEffect } from "react"
import Content from "../components/Content"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Modal from "../components/Modal"
import AddSnippet from "../components/AddSnippet"
import AddCollection from "../components/AddCollection"
import AddTag from "../components/AddTag"
import Snippet from "../types/Snippet"
import axiosClient from "../axios-client"

const Home = () => {
    const [selectedTab, setSelectedTab] = useState("snippets")
    const [selectedType, setSelectedType] = useState("snippets")
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [openModalFor, setOpenModalFor] = useState<string>("add_snippet")
    const [modalPosition, setModalPosition] = useState<"right" | "left">(
        "right"
    )

    const [snippets, setSnippets] = useState<Snippet[] | null>(null)

    function fetchSnippets() {
        axiosClient
            .get("/snippets")
            .then(({ data }) => {
                setSnippets(data.data.snippets)
            })
            .catch((err) => {
                const response = err.response
                if (response && response.status === 403) {
                    console.error(response.data.data)
                }
            })
    }

    useEffect(() => {
        fetchSnippets()
    }, [])

    const selectTab = (tab: string, type: string) => {
        setSelectedTab(tab)
        setSelectedType(type)
    }

    const toggleModal = (add: string) => {
        setOpenModalFor(add)
        setModalPosition("right")
        setOpenModal(!openModal)
    }

    interface ModalComponents {
        [key: string]: JSX.Element // Allow any string key with JSX.Element value
    }

    const modalComponents: ModalComponents = {
        add_snippet: (
            <AddSnippet toggleModal={toggleModal} setSnippets={setSnippets} />
        ),
        add_collection: <AddCollection toggleModal={toggleModal} />,
        add_tag: <AddTag toggleModal={toggleModal} />,
    }

    return (
        <>
            <Modal
                open={openModal}
                position={modalPosition}
                onClose={() => toggleModal("add_snippet")}
                size="large"
            >
                {modalComponents[openModalFor]}
            </Modal>

            <Navbar />

            <div className="flex">
                <Sidebar
                    tab={selectedTab}
                    selectTab={selectTab}
                    toggleModal={toggleModal}
                />
                <Content
                    show={selectedTab}
                    type={selectedType}
                    toggleModal={toggleModal}
                    snippets={snippets}
                    setSnippets={setSnippets}
                />
            </div>
        </>
    )
}

export default Home
