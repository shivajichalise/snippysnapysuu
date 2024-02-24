import ButtonProps from "../types/ButtonProps"

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`text-text-200 hover:bg-200 hover:text-text my-0.5 block w-full cursor-pointer rounded-md p-2`}
      onClick={props.onClick}
    >
      <div className='flex items-center justify-start'>
        {props.icon}
        <h1 className='ml-2 text-sm'> {props.text} </h1>
      </div>
    </button>
  )
}

export default Button
