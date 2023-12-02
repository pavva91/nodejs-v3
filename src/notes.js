import { insertDB, saveDB, getDB } from './db'

export const createNote = async (note, tags) => {
    const newNote = {
        tags,
        id: Date.now(),
        content: note,
    }
    await insertDB(newNote)
    return newNote
}

export const getAllNotes = async () => {
    const db = await getDB()

    // NOTE: This can be substituted by "object destructuring"
    // eslint-disable-next-line prefer-destructuring
    // const notes = db.notes

    const { notes } = db

    return notes
}

export const findNotes = async (filter) => {
    const { notes } = await getDB()
    return notes.filter((note) =>
        note.content.toLowerCase().includes(filter.toLowerCase())
    )
}

export const removeNote = async (id) => {
    const { notes } = await getDB()
    const match = notes.find((note) => note.id === id)
    if (match) {
        const newNotes = notes.filter((note) => note.id !== id)
        await saveDB({ notes: newNotes })
        return id
    }
    return -1
}

// NOTE: Example 1 of removeAll : Normal, I await the async call and then return the variable, 2 separate calls
// export const removeAllNotes = async () => {
//     const db = await saveDB({ notes: [] })
//     return db
// }

// NOTE: Example 2 of removeAll : remove the variable and return directly with 1 call only
// eslint-disable-next-line arrow-body-style
// export const removeAllNotes = async () => {
//     // eslint-disable-next-line no-return-await
//     return await saveDB({ notes: [] })
// }

// NOTE: Example 3 of removeAll : When I return an async directly I don't need to await (1 call only)
// eslint-disable-next-line arrow-body-style
// export const removeAllNotes = async () => {
//     return saveDB({ notes: [] })
// }

// NOTE: Example 4 of removeAll : When I return an async directly in one line I don't need brackets and return statement
export const removeAllNotes = () => saveDB({ notes: [] })
