import { useEffect, useState } from "react"
import RightContentProps from "../types/RightContentProps"
import Snippet from "../types/Snippet"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { IconX } from "@tabler/icons-react"
import IconButton from "./IconButton"

const RightContent = (props: RightContentProps) => {
    const [snippets, setSnippets] = useState<Snippet[]>(props.snippets || [])
    const [snippet, setSnippet] = useState<Snippet>()

    const [copied, setCopied] = useState<boolean[]>([])

    const handleCopy = (index: number) => {
        setCopied((prevCopiedStates) => {
            const newCopiedStates = [...prevCopiedStates]
            newCopiedStates[index] = true
            return newCopiedStates
        })
    }

    useEffect(() => {
        if (props.snippets) {
            setSnippets(props.snippets)
            console.log(props.snippets)
        }
    }, [props.snippets])

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(Array(snippet?.snippets.length).fill(false))
        }, 2000)

        return () => clearTimeout(timer)
    }, [copied])

    useEffect(() => {
        const fetchSnippet = () => {
            const foundSnippet = snippets.find((snip) => snip.id === props.id)
            setSnippet(foundSnippet)
            setCopied(Array(snippet?.snippets.length).fill(false))
        }

        fetchSnippet()
    }, [props.id])

    return (
        <div className="flex h-[calc(100vh-3.5rem)] w-96 flex-1 items-center justify-center overflow-y-scroll p-4">
            {snippet === undefined ? (
                <h1 className="text-100">SnipySnapySuuuuuuu...</h1>
            ) : (
                <div className="flex h-full w-full flex-col">
                    <div>
                        <div className="flex justify-between">
                            <h1 className="text-2xl">{snippet?.title}</h1>
                            <IconButton
                                type="primary"
                                onClick={props.clearSelectedSnippet}
                            >
                                <IconX size={15} className="m-1" />
                            </IconButton>
                        </div>
                        <p className="text-primary-200">
                            {snippet?.description}
                        </p>
                    </div>
                    {snippet?.snippets.map((snip, index) => (
                        <div className="mt-7" key={index}>
                            <p className="text-accent-300 text-sm">
                                {snip.description}
                            </p>
                            <div className="relative my-5">
                                <CopyToClipboard
                                    text={snip.code}
                                    onCopy={() => handleCopy(index)}
                                >
                                    <button className="btn btn-sm bg-primary border-primary hover:border-primary-200 absolute right-2 top-2 rounded-lg border-2 p-1">
                                        {copied[index] ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon icon-tabler icon-tabler-clipboard-check"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path
                                                    stroke="none"
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                ></path>
                                                <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
                                                <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
                                                <path d="M9 14l2 2l4 -4"></path>
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon icon-tabler icon-tabler-clipboard-copy"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path
                                                    stroke="none"
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                ></path>
                                                <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h3m9 -9v-5a2 2 0 0 0 -2 -2h-2"></path>
                                                <path d="M13 17v-1a1 1 0 0 1 1 -1h1m3 0h1a1 1 0 0 1 1 1v1m0 3v1a1 1 0 0 1 -1 1h-1m-3 0h-1a1 1 0 0 1 -1 -1v-1"></path>
                                                <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
                                            </svg>
                                        )}
                                    </button>
                                </CopyToClipboard>
                                <SyntaxHighlighter
                                    language={snip.language}
                                    style={tomorrow}
                                >
                                    {snip.code}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default RightContent
