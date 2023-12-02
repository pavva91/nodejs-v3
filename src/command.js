/* eslint-disable import/extensions */
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import {
    createNote,
    findNotes,
    getAllNotes,
    removeAllNotes,
    removeNote,
} from './notes.js'
import { listNotes } from './utils.js'

yargs(hideBin(process.argv))
    .command(
        'new <note>',
        'Create a new note',
        (args) =>
            args.positional('note', {
                type: 'string',
                description: 'The content of the note to create',
            }),
        async (argv) => {
            const tags = argv.tags ? argv.tags.split(',') : []
            const note = await createNote(argv.note, tags)
            console.log('New note added!', note)
        }
    )
    .option('tags', {
        alias: 't',
        type: 'string',
        description: 'tags to add to the note',
    })
    .command(
        'all',
        'get all notes',
        () => {},
        async () => {
            const notes = await getAllNotes()
            listNotes(notes)
        }
    )
    .command(
        'find <filter>',
        'get matching notes',
        (args) =>
            args.positional('filter', {
                describe:
                    'The search term to filter notes by, will be applied to note.content',
                type: 'string',
            }),
        async (argv) => {
            const matches = await findNotes(argv.filter)
            listNotes(matches)
        }
    )
    .command(
        'remove <id>',
        'remove a note by id',
        (args) =>
            args.positional('id', {
                type: 'number',
                description: 'The id of the note you want to remove',
            }),
        async (argv) => {
            const id = await removeNote(argv.id)
            console.log(id)
        }
    )
    .command(
        'web [port]',
        'launch website to see notes',
        (args) =>
            args.positional('port', {
                describe: 'port to bind on',
                default: 5000,
                type: 'number',
            }),
        async () => {}
    )
    .command(
        'clean',
        'remove all notes',
        () => {},
        async () => {
            const db = await removeAllNotes()
            console.log(db)
            console.log('DB resetted')
        }
    )
    .demandCommand(1)
    .parse()
