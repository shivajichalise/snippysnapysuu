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
import Collection from "../types/Collection"
import Tag from "../types/Tag"
import { Toaster, toast } from "sonner"

const Home = () => {
    const [selectedTab, setSelectedTab] = useState("snippets")
    const [selectedType, setSelectedType] = useState("snippets")
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [openModalFor, setOpenModalFor] = useState<string>("add_snippet")
    const [modalPosition, setModalPosition] = useState<"right" | "left">(
        "right"
    )
    const [successMessage, setSuccessMessage] = useState<string | null>(null)
    const [errorMessage, setRrrorMessage] = useState<string | null>(null)

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

    const [collections, setCollections] = useState<Collection[]>([])
    const [tags, setTags] = useState<Tag[]>([])
    const [collectionErrors, setCollectionsErrors] = useState("")
    const [tagErrors, setTagsErrors] = useState("")

    const fetchCollections = () => {
        axiosClient
            .get("/collections")
            .then(({ data }) => {
                setCollections(data.data.collections)
            })
            .catch((err) => {
                const response = err.response
                setCollectionsErrors(response.data.message)
            })
    }

    const fetchTags = () => {
        axiosClient
            .get("/tags")
            .then(({ data }) => {
                setTags(data.data.tags)
            })
            .catch((err) => {
                const response = err.response
                setTagsErrors(response.data.message)
            })
    }

    useEffect(() => {
        fetchCollections()
        fetchTags()
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
            <AddSnippet
                toggleModal={toggleModal}
                setSnippets={setSnippets}
                setSuccessMessage={setSuccessMessage}
            />
        ),
        add_collection: (
            <AddCollection
                toggleModal={toggleModal}
                setCollections={setCollections}
                setSuccessMessage={setSuccessMessage}
            />
        ),
        add_tag: (
            <AddTag
                toggleModal={toggleModal}
                setTags={setTags}
                setSuccessMessage={setSuccessMessage}
            />
        ),
    }

    useEffect(() => {
        if (successMessage && typeof successMessage === "string") {
            toast.success(successMessage)
        }
    }, [successMessage])

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

            <Toaster richColors />

            <div className="flex">
                <Sidebar
                    tab={selectedTab}
                    selectTab={selectTab}
                    toggleModal={toggleModal}
                    collections={collections}
                    setCollections={setCollections}
                    tags={tags}
                    setTags={setTags}
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
