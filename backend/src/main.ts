import "dotenv/config"
import express from "express"
import authRoutes from './routes/authRoutes'
import { success } from "./utils/httpResponses"
import HttpResponsesParams from "./types/HttpResponsesParams"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cookieParser())

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173",
}))

app.get('/api', (_, res) => {
    const params: HttpResponsesParams<[]> = {
        res: res,
        data: [],
        message: "Hello World",
        code: 200
    }
    success(params)
})

app.use('/api/auth', authRoutes)

export default app
