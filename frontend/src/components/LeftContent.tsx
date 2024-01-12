import { ChangeEvent, useEffect, useState } from "react"
import snippets from "../config/snippets"
import LeftContentProps from "../types/LeftContentProps"
import Card from "./Card"
import InputText from "./InputText.tsx"

const LeftContent = (props: LeftContentProps) => {
  const [searchParams] = useState(["title", "tags"])
  const [searchQuery, setSearchQuery] = useState("")
  const [snippetsList, setSnippetsList] = useState(snippets)
  const [listFavouriteSnippets, setListFavouriteSnippets] = useState(false)
  const [selectedTypeOfSnippets, setSelectedTypeOfSnippets] =
    useState("snippets")

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  useEffect(() => {
    props.toShow === "favourites"
      ? setListFavouriteSnippets(true)
      : setListFavouriteSnippets(false)
  }, [props.toShow])

  useEffect(() => {
    setSelectedTypeOfSnippets(props.type)
  }, [props.type, props.toShow])

  useEffect(() => {
    const matchSearchParam = (snippet: any) =>
      searchParams.some((param) =>
        snippet[param]
          .toString()
          .toLowerCase()
          .includes(searchQuery.toLowerCase()),
      )

    setSnippetsList(
      // filter based on input text and the params
      snippets.filter((snippet) => {
        if (listFavouriteSnippets && !snippet.isFavourite) {
          return false
        }

        if (selectedTypeOfSnippets === "tag") {
          return (
            snippet.tags.includes(props.toShow) && matchSearchParam(snippet)
          )
        }

        if (selectedTypeOfSnippets === "collection") {
          return (
            snippet.collections.includes(props.toShow) &&
            matchSearchParam(snippet)
          )
        }

        return matchSearchParam(snippet)
      }),
    )
  }, [searchQuery, listFavouriteSnippets, selectedTypeOfSnippets, props.toShow])

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
