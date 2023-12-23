interface CardProps {
  id: number
  title: string
  description: string
  snippets: string[]
  tags: string[]
  handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export default CardProps
