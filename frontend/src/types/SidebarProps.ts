import { Dispatch, SetStateAction } from "react"
import Collection from "./Collection"
import Tag from "./Tag"

interface SidebarProps {
    tab: string
    selectTab: (tab: string, type: string) => void
    toggleModal: (add: string) => void
    collections: Collection[] | null
    setCollections: Dispatch<SetStateAction<Collection[]>>
    tags: Tag[] | null
    setTags: Dispatch<SetStateAction<Tag[]>>
    handleDelete: (data: string, id: string) => void
}

export default SidebarProps
