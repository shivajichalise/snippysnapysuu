import snippets from "../config/snippets"
import Card from "./Card"

const LeftContent = () => {
  return (
    <div className='border-200 flex h-[calc(100vh-3.5rem)] flex-col gap-4 overflow-y-scroll border-r p-4'>
      {snippets.map((snippet) => (
        <Card key={snippet.id} {...snippet} />
      ))}
    </div>
  )
}

export default LeftContent
