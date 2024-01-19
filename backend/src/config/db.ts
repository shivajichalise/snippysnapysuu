import mysql from "mysql2/promise"

const connectDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    })

    connection.connect()

    console.log(`Connected to the database: ${connection}`)
  } catch (err) {
    console.error(`Error connecting to database: ${err}`)
    process.exit(1)
  }
}

export default connectDB
