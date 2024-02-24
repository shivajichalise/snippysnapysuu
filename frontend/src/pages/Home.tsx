import { useState } from "react"
import Content from "../components/Content"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Modal from "../components/Modal"
import AddSnippet from "../components/AddSnippet"

const Home = () => {
    const [selectedTab, setSelectedTab] = useState("snippets")
    const [selectedType, setSelectedType] = useState("snippets")
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [modalPosition, setModalPosition] = useState<"right" | "left">("right")

    const selectTab = (tab: string, type: string) => {
        setSelectedTab(tab)
        setSelectedType(type)
    }

    const toggleModal = () => {
        setModalPosition("right")
        setOpenModal(!openModal)
    }


    return (
        <>
            <Modal
                open={openModal}
                position={modalPosition}
                onClose={() => toggleModal()}
                size="large"
            >
                <AddSnippet toggleModal={toggleModal} />
            </Modal>

            <Navbar />

            <div className='flex'>
                <Sidebar tab={selectedTab} selectTab={selectTab} />
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
