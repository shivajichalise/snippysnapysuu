import {
    IconFolderFilled,
    IconPlus,
    IconSourceCode,
    IconStarsFilled,
    IconTag,
} from "@tabler/icons-react"
import Anchor from "./Anchor"
import tags from "../config/tags"
import SidebarProps from "../types/SidebarProps"
import IconButton from "./IconButton"
import { useEffect, useState } from "react"
import Collection from "../types/Collection"
import axiosClient from "../axios-client"

const Sidebar = (props: SidebarProps) => {
    const [collections, setCollections] = useState<Collection[]>([])
    const [errors, setErrors] = useState("")

    const fetchCollections = () => {
        axiosClient
            .get("/collections")
            .then(({ data }) => {
                setCollections(data.data.collections)
            })
            .catch((err) => {
                const response = err.response
                setErrors(response.data.message)
            })
    }

    useEffect(() => {
        fetchCollections()
    }, [])

    return (
        <div className="border-200 bg-300 flex h-[calc(100vh-(3.5rem))] w-64 flex-col border-r p-4">
            <div className="mb-4">
                <Anchor
                    to="/home"
                    icon={<IconSourceCode size={16} />}
                    text="Snippets"
                    isActive={props.tab === "snippets" ? true : false}
                    select={() => props.selectTab("snippets", "snippets")}
                />
                <Anchor
                    to="#"
                    icon={<IconStarsFilled size={16} />}
                    text="Favourites"
                    isActive={props.tab === "favourites" ? true : false}
                    select={() => props.selectTab("favourites", "favourites")}
                />
            </div>
            <div className="mb-4">
                <div className="flex items-center justify-between">
                    <label className="text-accent-200 text-sm">
                        Collections
                    </label>
                    <IconButton
                        type="primary"
                        onClick={() => props.toggleModal("add_collection")}
                    >
                        <IconPlus size={13} />
                    </IconButton>
                </div>
                {collections &&
                    collections.map((collection) => (
                        <Anchor
                            key={collection.id}
                            to="#"
                            icon={<IconFolderFilled size={16} />}
                            text={collection.name}
                            isActive={
                                props.tab === collection.name ? true : false
                            }
                            select={() =>
                                props.selectTab(collection.name, "collection")
                            }
                        />
                    ))}
            </div>
            <div className="mb-4">
                <div className="flex items-center justify-between">
                    <label className="text-accent-200 text-sm">Tags</label>
                    <IconButton
                        type="primary"
                        onClick={() => console.log("new tag")}
                    >
                        <IconPlus size={13} />
                    </IconButton>
                </div>
                {tags.map((tag) => (
                    <Anchor
                        key={tag.id}
                        to="#"
                        icon={<IconTag size={16} />}
                        text={tag.name}
                        isActive={props.tab === tag.slug ? true : false}
                        select={() => props.selectTab(tag.slug, "tag")}
                    />
                ))}
            </div>
        </div>
    )
}

export default Sidebar
