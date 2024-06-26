import sql from "./db"
import chalk from "chalk"

const error = chalk.underline.red
const success = chalk.green
const warning = chalk.hex("#FFA500")

const DATABASE: string = process.env.DB_DATABASE!

async function createUsersTable() {
    try {
        await sql`SELECT * FROM users`
    } catch (error) {
        console.log(warning("Users table doesn't exist. Creating one."))
        await sql`CREATE TABLE users (
            id UUID PRIMARY KEY NOT NULL,
            name VARCHAR(255),
            email VARCHAR(255) UNIQUE,
            password VARCHAR(255),
            created_at TIMESTAMP WITH TIME ZONE,
            updated_at TIMESTAMP WITH TIME ZONE
        )`
    }
}

async function createCollectionsTable() {
    try {
        await sql`SELECT * FROM collections`
    } catch (error) {
        console.log(warning("Collections table doesn't exist. Creating one."))
        await sql`CREATE TABLE collections (
            id UUID PRIMARY KEY NOT NULL,
            user_id UUID REFERENCES users(id) ON DELETE CASCADE,
            name VARCHAR(255),
            created_at TIMESTAMP WITH TIME ZONE,
            updated_at TIMESTAMP WITH TIME ZONE
        )`
    }
}

async function createSnippetsTable() {
    try {
        await sql`SELECT * FROM snippets`
    } catch (error) {
        console.log(warning("Snippets table doesn't exist. Creating one."))
        await sql`CREATE TABLE snippets (
            id UUID PRIMARY KEY NOT NULL,
            user_id UUID REFERENCES users,
            collection_id UUID REFERENCES collections(id) ON DELETE CASCADE NULL,
            title VARCHAR(255),
            description VARCHAR(255),
            tags VARCHAR(255) ARRAY,
            favourite BOOLEAN,
            created_at TIMESTAMP WITH TIME ZONE,
            updated_at TIMESTAMP WITH TIME ZONE
        )`
    }
}

async function createCodesTable() {
    try {
        await sql`SELECT * FROM codes`
    } catch (error) {
        console.log(warning("Codes table doesn't exist. Creating one."))
        await sql`CREATE TABLE codes (
            id UUID PRIMARY KEY NOT NULL,
            snippet_id UUID REFERENCES snippets(id) ON DELETE CASCADE,
            language VARCHAR(255),
            description VARCHAR(255),
            code text,
            created_at TIMESTAMP WITH TIME ZONE,
            updated_at TIMESTAMP WITH TIME ZONE
        )`
    }
}

async function createTagsTable() {
    try {
        await sql`SELECT * FROM tags`
    } catch (error) {
        console.log(warning("Tags table doesn't exist. Creating one."))
        await sql`CREATE TABLE tags (
            id UUID PRIMARY KEY NOT NULL,
            user_id UUID REFERENCES users(id) ON DELETE CASCADE, 
            name VARCHAR(255),
            created_at TIMESTAMP WITH TIME ZONE,
            updated_at TIMESTAMP WITH TIME ZONE
        )`
    }
}

async function createSnippetTagsTable() {
    try {
        await sql`SELECT * FROM snippet_tags`
    } catch (error) {
        console.log(
            warning("Some dependency table doesn't exist. Creating one.")
        )
        await sql`CREATE TABLE snippet_tags (
            snippet_id UUID REFERENCES snippets(id) ON DELETE CASCADE,
            tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,
            created_at TIMESTAMP WITH TIME ZONE,
            updated_at TIMESTAMP WITH TIME ZONE
        )`
    }
}

async function setupDB() {
    try {
        await sql`SELECT datname FROM pg_catalog.pg_database WHERE datname=${DATABASE}`
        try {
            await createUsersTable()
            await createCollectionsTable()
            await createSnippetsTable()
            await createCodesTable()
            await createTagsTable()
            await createSnippetTagsTable()
        } catch (err) {
            console.error(error("Error creating tables:", err))
            process.exit(1)
        }
    } catch (err) {
        console.log(
            error(
                `Please create your database before proceeding. Create database with exact name that you've provided in the .env.`
            )
        )
        process.exit(1)
    }
}

export default setupDB
