import { useState } from "react"
import Content from "../components/Content"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Modal from "../components/Modal"
import AddSnippet from "../components/AddSnippet"
import AddCollection from "../components/AddCollection"

const Home = () => {
    const [selectedTab, setSelectedTab] = useState("snippets")
    const [selectedType, setSelectedType] = useState("snippets")
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [openModalFor, setOpenModalFor] = useState<string>("add_snippet")
    const [modalPosition, setModalPosition] = useState<"right" | "left">(
        "right"
    )

    const selectTab = (tab: string, type: string) => {
        setSelectedTab(tab)
        setSelectedType(type)
    }

    const toggleModal = (add: string) => {
        setOpenModalFor(add)
        setModalPosition("right")
        setOpenModal(!openModal)
    }

    return (
        <>
            <Modal
                open={openModal}
                position={modalPosition}
                onClose={() => toggleModal("add_snippet")}
                size="large"
            >
                {openModalFor === "add_snippet" ? (
                    <AddSnippet toggleModal={toggleModal} />
                ) : (
                    <AddCollection toggleModal={toggleModal} />
                )}
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
                />
            </div>
        </>
    )
}

export default Home
