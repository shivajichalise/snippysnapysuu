import User from "../models/User"
import sql from "../config/db"

// @desc    Find user by id
// @route   Post /api/users/:id
// @access  Public
export function find(id: string){
    const user = sql`SELECT name FROM users WHERE id = ${ id }`
    return user
}

// @desc    Find an email
// @route   Post /api/users/:email
// @access  Public
export async function emailExists(email: string){
    const e = await sql`SELECT email FROM users WHERE email = ${ email }`

    if(e.length > 0){
        return true
    }
    return false
}

// @desc    Find user by email
// @route   Post /api/users/:email
// @access  Public
export async function findByEmail(email: string){
    const user = await sql<User[]>`SELECT id, name, email, password FROM users WHERE email = ${ email }`

    if(user.length > 0){
        return user[0]
    }

    return null
}
