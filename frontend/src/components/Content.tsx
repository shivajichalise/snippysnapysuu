import { useEffect, useState } from "react"
import LeftContent from "./LeftContent"
import RightContent from "./RightContent"
import ContentProps from "../types/ContentProps"
import axiosClient from "../axios-client"
import Snippet from "../types/Snippet"

const Content = (props: ContentProps) => {
    const [snippetId, setSnippetId] = useState("0")

    const [snippets, setSnippets] = useState<Snippet[] | null>(null)

    function fetchSnippets() {
        axiosClient
            .get("/snippets")
            .then(({ data }) => {
                setSnippets(data.data.snippets)
            })
            .catch((err) => {
                const response = err.response
                if (response && response.status === 403) {
                    console.error(response.data.data)
                }
            })
    }

    useEffect(() => {
        fetchSnippets()
    }, [])

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setSnippetId(e.currentTarget.id)
    }

    const clearSelectedSnippet = () => {
        setSnippetId("0")
    }

    return (
        <>
            <div className="bg-300 flex flex-1">
                {snippets !== null && (
                    <>
                        <LeftContent
                            snippets={snippets}
                            handleClick={handleClick}
                            toShow={props.show}
                            type={props.type}
                            toggleModal={props.toggleModal}
                        />
                        <RightContent
                            id={snippetId}
                            snippets={snippets}
                            clearSelectedSnippet={clearSelectedSnippet}
                        />
                    </>
                )}
            </div>
        </>
    )
}

export default Content
