import { useStateContext } from "../contexts/ContextProvider"

const checkAuth = () => {
    const { token } = useStateContext()

    if (!token) {
        return false
    }

    return true
}

export default checkAuth
