import { Dispatch, SetStateAction } from "react"
import Snippet from "./Snippet"

interface ContentProps {
    show: string
    type: string
    toggleModal: (add: string) => void
    snippets: Snippet[] | null
    setSnippets: Dispatch<SetStateAction<Snippet[] | null>>
    handleDelete: (data: string, id: string) => void
}

export default ContentProps
