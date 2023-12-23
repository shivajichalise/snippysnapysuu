import { useEffect, useState } from "react"
import RightContentProps from "../types/RightContentProps"
import snippets from "../config/snippets"

const RightContent = (props: RightContentProps) => {
  const [snippet, setSnippet] = useState({})

  useEffect(() => {
    const fetchSnippet = () => {
      const foundSnippet = snippets.find((snip) => snip.id === props.id)
      setSnippet(foundSnippet)
    }

    fetchSnippet()
  }, [props.id])

  return (
    <div className='flex w-full items-center justify-center p-4'>
      {props.id === "0" ? (
        <h1 className='text-100'>SnipySnapySuuuuuuu...</h1>
      ) : (
        <h1 className='text-100'>{snippet?.title}</h1>
      )}
    </div>
  )
}

export default RightContent
