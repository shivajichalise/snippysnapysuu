interface User {
    id: string
    name: string
    email: string
    password: string
    createdAt?: Date
    updatedAt?: Date
    token?: string
}

export default User
