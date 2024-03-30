import { Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../contexts/ContextProvider"

const DefaultPage = () => {
    const { token } = useStateContext()

    return token ? <Outlet /> : <Navigate to="/login" />
}

export default DefaultPage
