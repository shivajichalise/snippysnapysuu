import Snippet from "./Snippet"

interface RightContentProps {
    id: string
    snippets: Snippet[] | null
    clearSelectedSnippet: () => void
    handleDelete: (data: string, id: string) => void
}

export default RightContentProps
