import "dotenv/config"
import express from "express"
import authRoutes from './routes/authRoutes'

const app = express()

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.use(authRoutes)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('listening')
})
