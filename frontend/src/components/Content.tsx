import { useState } from "react"
import LeftContent from "./LeftContent"
import RightContent from "./RightContent"
import ContentProps from "../types/ContentProps"

const Content = (props: ContentProps) => {
  const [snippetId, setSnippetId] = useState("0")

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setSnippetId(e.currentTarget.id)
  }

  const clearSelectedSnippet = () => {
    setSnippetId("0")
  }

  return (
    <div className='bg-300 flex flex-1'>
      <LeftContent handleClick={handleClick} toShow={props.show} />
      <RightContent
        id={snippetId}
        clearSelectedSnippet={clearSelectedSnippet}
      />
    </div>
  )
}

export default Content
