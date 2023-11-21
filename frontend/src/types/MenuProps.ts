interface MenuProps {
  image: string
  text: {
    title: string
    description: string
  } | null
  showText: boolean
  toggleModal: () => void
}

export default MenuProps
