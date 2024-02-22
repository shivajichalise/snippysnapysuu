import { Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../contexts/ContextProvider"

const GuestPage = () => {
    const { token } = useStateContext()

    if (token) {
        return <Navigate to="/home" />
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}

export default GuestPage
