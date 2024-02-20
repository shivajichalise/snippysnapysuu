import "dotenv/config"
import jwt from "jsonwebtoken"
import User from "../models/User";

export default function generateToken(user: User) {
    return jwt.sign(user, process.env.JWT_SECRET!, { expiresIn: '1h' });
}
