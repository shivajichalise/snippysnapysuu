import jwt from "jsonwebtoken"

export default function generateToken(id: string) {
    return jwt.sign(
        {
            id 
        }, // payloads
        process.env.JWT_SECRET, // secrets
        { 
            expiredIn: '10d'
        } // callbacks
    )
}
