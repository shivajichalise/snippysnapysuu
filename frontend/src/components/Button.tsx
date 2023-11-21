import ButtonProps from "../types/ButtonProps"

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`p-1 text-text-200 rounded-md hover:bg-200`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button
