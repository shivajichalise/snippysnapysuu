import { useState } from "react"
import LeftContent from "./LeftContent"
import RightContent from "./RightContent"

const Content = () => {
  const [snippetId, setSnippetId] = useState("0")

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setSnippetId(e.currentTarget.id)
  }

  return (
    <div className='bg-300 flex w-full'>
      <LeftContent handleClick={handleClick} />
      <RightContent id={snippetId} />
    </div>
  )
}

export default Content
