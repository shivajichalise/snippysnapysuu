import {
    Dispatch,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from "react"
import User from "../types/User"
import ContextProviderProps from "../types/ContextProviderProps"

type ContextData = {
    user: User | null
    token: string | null
    setUser: Dispatch<SetStateAction<User | null>>
    setToken: (token: string | null) => void
}

const initialState: ContextData = {
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
}

const StateContext = createContext(initialState)

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const [user, setUser] = useState<User | null>(null)
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"))

    function setToken(token: string | null) {
        _setToken(token)

        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token)
        } else {
            localStorage.removeItem("ACCESS_TOKEN")
        }
    }

    return (
        <StateContext.Provider
            value={{
                user,
                token,
                setUser,
                setToken,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
