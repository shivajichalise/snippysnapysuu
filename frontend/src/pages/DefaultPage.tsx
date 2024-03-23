import { Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../contexts/ContextProvider"
import { ReactNode } from "react"

interface AuthenticatedRouteProps {
    children: ReactNode
}

const AuthenticatedRoute = (props: AuthenticatedRouteProps) => {
    const { token } = useStateContext()

    return token ? props.children : <Navigate to="/login" />
}

const DefaultPage = () => {
    return (
        <div>
            <AuthenticatedRoute>
                <Outlet />
            </AuthenticatedRoute>
        </div>
    )
}

export default DefaultPage
