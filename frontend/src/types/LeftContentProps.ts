import Snippet from "./Snippet"

interface LeftContentProps {
    snippets: Snippet[] | null
    handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
    toShow: string
    type: string
    toggleModal: () => void
}

export default LeftContentProps
