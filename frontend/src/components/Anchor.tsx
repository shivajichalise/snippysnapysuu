import { Link } from "react-router-dom"
import AnchorProps from "../types/AnchorProps"

const Anchor = (props: AnchorProps) => {
  return (
    <Link
      to={props.to}
      className={`${
        props.isActive ? "bg-200 shadow-inner" : ""
      } text-text-200 hover:bg-200 hover:text-text my-0.5 block w-full cursor-pointer rounded-md p-2`}
      onClick={() => props.select()}
    >
      <div className='flex items-center justify-start'>
        {props.icon}
        <h1 className='ml-2 text-sm'> {props.text} </h1>
      </div>
    </Link>
  )
}

export default Anchor
