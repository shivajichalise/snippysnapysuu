interface SidebarProps {
    tab: string
    selectTab: (tab: string, type: string) => void
    toggleModal: (add: string) => void
}

export default SidebarProps
