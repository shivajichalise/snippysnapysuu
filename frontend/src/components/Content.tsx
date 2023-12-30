import { useState } from "react"
import LeftContent from "./LeftContent"
import RightContent from "./RightContent"

const Content = () => {
  const [snippetId, setSnippetId] = useState("0")

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setSnippetId(e.currentTarget.id)
  }

  const clearSelectedSnippet = () => {
    setSnippetId("0")
  }

  return (
    <div className='bg-300 flex flex-1'>
      <LeftContent handleClick={handleClick} />
      <RightContent
        id={snippetId}
        clearSelectedSnippet={clearSelectedSnippet}
      />
    </div>
  )
}

export default Content
