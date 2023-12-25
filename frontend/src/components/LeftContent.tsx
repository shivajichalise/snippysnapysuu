import snippets from "../config/snippets"
import LeftContentProps from "../types/LeftContentProps"
import Card from "./Card"

const LeftContent = (props: LeftContentProps) => {
  return (
    <div className='border-200 flex h-[calc(100vh-3.5rem)] w-96 flex-col gap-4 overflow-y-scroll border-r p-4'>
      {snippets.map((snippet) => (
        <Card
          key={snippet.id}
          snippet={snippet}
          handleClick={props.handleClick}
        />
      ))}
    </div>
  )
}

export default LeftContent
