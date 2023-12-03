import fs from 'node:fs/promises'
import http from 'http'

export const interpolate = (html, data) =>
    html.replace(
        /\{\{\s*(\w+)\s*\}\}/g,
        (match, placeholder) => data[placeholder] || ''
    )

export const formatNotes = (notes) => {
    const formattedNotes = notes
        .map(
            (note) =>
                `
            <div class="note"
                <p>${note.content}</p>
                <div class="tags">
                ${note.tags
                    .map((tag) => `<span class="tag">${tag}</span>`)
                    .join('')}
                </div>
            </div>
            `
        )
        .join('\n')
    return formattedNotes
}

export const createServer = (notes) => {
    const server = http.createServer(async (req, res) => {
        const HTML_PATH = new URL('./template.html', import.meta.url).pathname
        const template = await fs.readFile(HTML_PATH, 'utf-8')
        const html = interpolate(template, { notes: formatNotes(notes) })
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(html)
    })
    return server
}

export const start = (notes, port) => {
    const server = createServer(notes)
    server.listen(port, () => {
        const address = `http://localhost:${port}`
        console.log(`server on ${address}`)
    })
}
