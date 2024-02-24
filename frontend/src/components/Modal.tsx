import ModalProps from "../types/ModalProps"

const Modal = ({ size, open, position, onClose, children }: ModalProps) => {

    let width = "w-80";
    switch (size) {
        case "medium":
            width = "w-96";
            break;
        case "large":
            width = "w-1/2";
            break;
        default:
            width = "w-80";
            break;
    }

    return (
        <div className={`${open ? "block" : "hidden"}`}>
            <span
                className='bg-100 absolute h-full w-full opacity-50'
                onClick={onClose}
            ></span>
            <div
                className={`absolute top-0 ${
                    position === "right"
                    ? "right-0 rounded-l-2xl"
                    : "left-0 rounded-r-2xl"
                    } ${width} bg-300 z-50 h-screen overflow-y-scroll p-4`}
            >
                {children}
            </div>
        </div>
    )
}

export default Modal
