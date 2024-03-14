import { ChangeEvent, useEffect, useState } from "react"
import LeftContentProps from "../types/LeftContentProps"
import Card from "./Card"
import InputText from "./InputText.tsx"
import Loader from "./Loader.tsx"
import IconButton from "./IconButton.tsx"
import { IconPlus } from "@tabler/icons-react"
import Snippet from "../types/Snippet.ts"

const LeftContent = (props: LeftContentProps) => {
    const [searchParams] = useState(["title", "tags"])
    const [searchQuery, setSearchQuery] = useState("")
    const [snippets, setSnippets] = useState<Snippet[]>(props.snippets || [])
    const [snippetsList, setSnippetsList] = useState<Snippet[]>([])
    const [listFavouriteSnippets, setListFavouriteSnippets] = useState(false)
    const [selectedTypeOfSnippets, setSelectedTypeOfSnippets] =
        useState("snippets")
    const [showLoader, setShowLoader] = useState(true)

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
    }

    useEffect(() => {
        if (props.snippets) {
            setSnippets(props.snippets)
        }
    }, [props.snippets])

    useEffect(() => {
        props.toShow === "favourites"
            ? setListFavouriteSnippets(true)
            : setListFavouriteSnippets(false)
    }, [props.toShow])

    useEffect(() => {
        setSelectedTypeOfSnippets(props.type)
    }, [props.type, props.toShow])

    useEffect(() => {
        const matchSearchParam = (snippet: any) =>
            searchParams.some((param) =>
                snippet[param]
                    .toString()
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
            )

        setSnippetsList(
            // filter based on input text and the params
            snippets.filter((snippet) => {
                if (listFavouriteSnippets && !snippet.isFavourite) {
                    return false
                }

                if (selectedTypeOfSnippets === "tag") {
                    return (
                        snippet.tags.includes(props.toShow) &&
                        matchSearchParam(snippet)
                    )
                }
                if (selectedTypeOfSnippets === "collection") {
                    return (
                        snippet.collections.includes(props.toShow) &&
                        matchSearchParam(snippet)
                    )
                }

                return matchSearchParam(snippet)
            })
        )
    }, [
        searchQuery,
        listFavouriteSnippets,
        selectedTypeOfSnippets,
        props.toShow,
    ])

    useState(() => {
        const timeoutId = setTimeout(() => {
            setShowLoader(false)
        }, 1000)

        // Cleanup the timeout to avoid unnecessary updates
        return () => clearTimeout(timeoutId)
    })

    return (
        <div className="border-200 flex h-[calc(100vh-3.5rem)] flex-col overflow-y-scroll border-r p-4">
            {showLoader ? (
                <Loader />
            ) : snippetsList.length > 0 ? (
                <>
                    <div className="mb-4 flex items-center justify-between">
                        <InputText
                            name="search"
                            id="search-snippet"
                            placeholder="Search snippet..."
                            onChange={handleOnChange}
                        />
                        <div className="ml-1">
                            <IconButton
                                type="primary"
                                onClick={props.toggleModal}
                            >
                                <IconPlus size={15} className="m-2" />
                            </IconButton>
                        </div>
                    </div>
                    <div className="flex w-96 flex-col gap-4">
                        {snippetsList.map((snippet) => (
                            <Card
                                key={snippet.id}
                                snippet={snippet}
                                handleClick={props.handleClick}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <div className="flex h-full w-96 items-center justify-center">
                    <h1 className="text-100">No snippets found :( </h1>
                </div>
            )}
        </div>
    )
}

export default LeftContent
