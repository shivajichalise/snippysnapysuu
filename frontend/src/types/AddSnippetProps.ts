import { Dispatch, SetStateAction } from "react"
import Snippet from "./Snippet"

interface AddSnippetProps {
    toggleModal: (add: string) => void
    setSnippets: Dispatch<SetStateAction<Snippet[] | null>>
}

export default AddSnippetProps
