interface Snippet {
    id: string
    title: string
    description: string
    tags: string[]
    favourite: boolean
    createdAt?: Date
    updatedAt?: Date
}

export default Snippet
