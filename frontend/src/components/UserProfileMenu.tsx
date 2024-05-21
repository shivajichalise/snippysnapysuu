import axiosClient from "../axios-client"
import UserProfileMenuProps from "../types/UserProfileMenuProps"
import Anchor from "./Anchor"
import Button from "./Button"
import { IconX, IconLogout, IconUser, IconUserCog } from "@tabler/icons-react"
import { useStateContext } from "../contexts/ContextProvider"
import IconButton from "./IconButton"

const UserProfileMenu = (props: UserProfileMenuProps) => {
    const { setUser, setToken } = useStateContext()

    function logout() {
        axiosClient
            .post("/auth/logout")
            .then(() => {
                setUser(null)
                setToken(null)
            })
            .catch((err) => {
                const response = err.response
                if (response && response.status === 403) {
                    // setErrors(response.data.data)
                }
            })
    }

    return (
        <div className="flex h-full flex-col justify-between">
            <div className="flex flex-col">
                <div className="flex w-full items-center justify-center">
                    {props.children}
                    <IconButton type="primary" onClick={props.toggleModal}>
                        <IconX size={15} />
                    </IconButton>
                </div>
                <hr className="bg-300 my-3 h-px w-full rounded-lg border-0" />
                <div>
                    <Anchor
                        to="https://instagram.com"
                        text="Profile"
                        icon={<IconUser size={16} />}
                    />
                    <Anchor
                        to="https://instagram.com"
                        text="Account settings"
                        icon={<IconUserCog size={16} />}
                    />
                </div>
            </div>
            <div>
                <Button
                    type="primary"
                    text="Logout"
                    onClick={logout}
                    icon={<IconLogout size={15} />}
                />
            </div>
        </div>
    )
}

export default UserProfileMenu
