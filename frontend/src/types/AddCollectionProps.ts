import { Dispatch, SetStateAction } from "react"
import Collection from "./Collection"

interface AddCollectionProps {
    toggleModal: (add: string) => void
    setCollections: Dispatch<SetStateAction<Collection[]>>
    setSuccessMessage: Dispatch<SetStateAction<string | null>>
}

export default AddCollectionProps
