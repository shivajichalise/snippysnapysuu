import Snippet from "./Snippet"

interface CardProps {
  snippet: Snippet
  handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export default CardProps
