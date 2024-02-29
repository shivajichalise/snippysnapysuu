import sql from "../config/db"

// @desc    Find snippet by id
// @route   Post /api/snippets/:id
// @access  Public
export function find(id: string) {
    const snippet = sql`SELECT * FROM snippets WHERE id = ${id}`
    return snippet
}

// @desc    Store a snippet
// @route   Post /api/snippets
// @access  Public
export function store() {
    const snippet = 0 // Insert Snippet SQL
    return snippet
}
