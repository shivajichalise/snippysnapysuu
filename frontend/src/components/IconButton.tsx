import ButtonProps from "../types/ButtonProps"

const IconButton = (props: ButtonProps) => {
    return (
        <button
            className={`text-text-200 hover:bg-200 rounded-md p-1`}
            onClick={props.onClick}
            type="button"
        >
            {props.children}
        </button>
    )
}

export default IconButton
