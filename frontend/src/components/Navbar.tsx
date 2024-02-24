import { useState } from "react"
import Menu from "./Menu"
import Modal from "../components/Modal"
import UserProfileMenu from "./UserProfileMenu"
import logo from "../assets/logo.png"
import AppMenu from "./AppMenu"
import { useStateContext } from "../contexts/ContextProvider"
import { Link } from "react-router-dom"

const Navbar = () => {
    const { token } = useStateContext()
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [modalPosition, setModalPosition] = useState<"right" | "left">("right")

    const { user } = useStateContext()

    const toggleModal = (position: "right" | "left") => {
        setModalPosition(position)
        setOpenModal(!openModal)
    }

    const image =
        "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"

    let text = null
    if(user){
        text = {
            title: user.email,
            description: user.name,
        }
    }

    return (
        <>
            <Modal
                open={openModal}
                position={modalPosition}
                onClose={() => toggleModal("right")}
                size="medium"
            >
                {modalPosition === "right" ? (
                    <UserProfileMenu toggleModal={() => toggleModal(modalPosition)}>
                        <Menu
                            image={image}
                            text={text}
                            showText={true}
                            toggleModal={() => null}
                        />
                    </UserProfileMenu>
                ) : (
                        <AppMenu toggleModal={() => toggleModal(modalPosition)}>
                            <Menu
                                image={logo}
                                text={null}
                                showText={false}
                                toggleModal={() => null}
                            />
                        </AppMenu>
                    )}
            </Modal>

            <nav className='bg-300 border-200 flex h-14 items-center justify-between border-b p-3'>
                <Menu
                    image={logo}
                    text={null}
                    showText={false}
                    toggleModal={() => toggleModal("left")}
                />
                {token ? (
                    <Menu
                        image={image}
                        text={text}
                        showText={false}
                        toggleModal={() => toggleModal("right")}
                    />
                ) : (
                        <div className="flex">
                            <Link
                                to='/login'
                                className='text-primary-200 mr-3 hover:opacity-75'
                            >
                                Login
                            </Link>
                            <Link
                                to='/signup'
                                className='text-primary-200 mr-3 hover:opacity-75'
                            >
                                Sign up
                            </Link>
                        </div>
                    )
                }
            </nav>
        </>
    )
}

export default Navbar
