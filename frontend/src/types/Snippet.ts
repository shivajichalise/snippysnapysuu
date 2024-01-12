interface Snippet {
  id: string
  title: string
  description: string
  snippets: {
    language: string
    description: string
    code: string
  }[]
  tags: string[]
  collections: string[]
  isFavourite: boolean
}

export default Snippet
