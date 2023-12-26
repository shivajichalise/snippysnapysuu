import snippets from "../config/snippets"
import LeftContentProps from "../types/LeftContentProps"
import Card from "./Card"
import InputText from "./InputText."

const LeftContent = (props: LeftContentProps) => {
  return (
    <div className='flex h-[calc(100vh-3.5rem)] flex-col overflow-y-scroll p-4'>
      <div className='mb-4'>
        <InputText placeholder='Search snippet...' />
      </div>
      <div className='flex w-96 flex-col gap-4'>
        {snippets.map((snippet) => (
          <Card
            key={snippet.id}
            snippet={snippet}
            handleClick={props.handleClick}
          />
        ))}
      </div>
    </div>
  )
}

export default LeftContent
