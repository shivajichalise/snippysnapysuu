import { ChangeEvent, useEffect, useState } from "react"
import snippets from "../config/snippets"
import LeftContentProps from "../types/LeftContentProps"
import Card from "./Card"
import InputText from "./InputText."

const LeftContent = (props: LeftContentProps) => {
  const [searchParams] = useState(["title", "tags"])
  const [searchQuery, setSearchQuery] = useState("")
  const [snippetsList, setSnippetsList] = useState(snippets)

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSnippetsList(snippets)
    } else {
      setSnippetsList(
        // filter based on input text and the params
        snippets.filter((snippet) =>
          searchParams.some((param) =>
            snippet[param]
              .toString()
              .toLowerCase()
              .includes(searchQuery.toLowerCase()),
          ),
        ),
      )
    }
  }, [searchQuery])

  return (
    <div className='flex h-[calc(100vh-3.5rem)] flex-col overflow-y-scroll p-4'>
      <div className='mb-4'>
        <InputText
          name='search'
          id='search-snippet'
          placeholder='Search snippet...'
          onChange={handleOnChange}
        />
      </div>
      <div className='flex w-96 flex-col gap-4'>
        {snippetsList.map((snippet) => (
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
