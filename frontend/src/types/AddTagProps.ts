import { Dispatch, SetStateAction } from "react"
import Tag from "./Tag"

interface AddTagProps {
    toggleModal: (add: string) => void
    setTags: Dispatch<SetStateAction<Tag[]>>
    setSuccessMessage: Dispatch<SetStateAction<string | null>>
}

export default AddTagProps
