import Snippet from "./Snippet"

interface RightContentProps {
    id: string
    snippets: Snippet[] | null
    clearSelectedSnippet: () => void
}

export default RightContentProps
