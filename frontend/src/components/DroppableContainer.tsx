import { useState } from "react"
import DroppableContainerProps from "../types/DroppableContainerProps"
import IconButton from "./IconButton"
import { IconArrowDown, IconArrowLeft } from "@tabler/icons-react"

const DroppableContainer = (props: DroppableContainerProps) => {
    const { children, label } = props
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="w-full">
            <div className="flex justify-between">
                <div className="m-1">
                    <label className="text-xs">{label}</label>
                </div>
                <IconButton type="primary" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                        <IconArrowDown size={15} className="m-1" />
                    ) : (
                        <IconArrowLeft size={15} className="m-1" />
                    )}
                </IconButton>
            </div>
            {isOpen && (
                <div
                    className={`border-100 mt-1 w-full rounded-md border p-4 shadow-lg`}
                >
                    {children}
                </div>
            )}
        </div>
    )
}

export default DroppableContainer
