import Code from "./Code"

interface Snippet {
    id: string
    user_id: string
    title: string
    description: string
    tags: string[]
    favourite: boolean
    snippets: Code[]
    createdAt?: Date
    updatedAt?: Date
}

export default Snippet
