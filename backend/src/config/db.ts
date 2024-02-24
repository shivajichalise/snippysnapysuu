import postgres from "postgres"

const HOST: string = process.env.DB_HOST!
const DATABASE: string = process.env.DB_DATABASE!
const USERNAME: string = process.env.DB_USERNAME!
const PASSWORD: string = process.env.DB_PASSWORD!

const sql = postgres({
    host: HOST,
    database: DATABASE,
    username: USERNAME,
    password: PASSWORD,
})
export default sql
