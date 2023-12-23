import Badge from "./Badge"
import CardProps from "../types/CardProps"

const Card = (props: CardProps) => {
  return (
    <div
      id={props.id}
      className='bg-primary-300 w-full cursor-pointer rounded-md p-4 text-white hover:mb-[5px] hover:mt-[-5px]'
      onClick={props.handleClick}
    >
      <div className='p-2 text-lg font-bold'>{props.title}</div>
      <div className='p-2'>{props.description}</div>
      <div className='flex gap-2 p-2'>
        {props.tags.map((tag) => (
          <Badge key={tag} text={tag} type='primary' rounded />
        ))}
      </div>
    </div>
  )
}
export default Card
