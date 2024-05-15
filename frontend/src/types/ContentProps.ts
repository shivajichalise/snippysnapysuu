import { Dispatch, SetStateAction } from "react"
import Snippet from "./Snippet"

interface ContentProps {
    show: string
    type: string
    toggleModal: (add: string) => void
    snippets: Snippet[] | null
    setSnippets: Dispatch<SetStateAction<Snippet[] | null>>
}

export default ContentProps
