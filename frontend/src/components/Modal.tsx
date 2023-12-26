import ModalProps from "../types/ModalProps"

const Modal = ({ open, position, onClose, children }: ModalProps) => {
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
        } w-80 h-screen bg-300 p-4 md:w-96 z-50`}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
