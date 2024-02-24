interface LeftContentProps {
  handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  toShow: string
  type: string
  toggleModal: () => void
}

export default LeftContentProps
