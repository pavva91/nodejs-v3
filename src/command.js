import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

yargs(hideBin(process.argv))
    .command(
        'new <note>',
        'Create a new note',
        (args) =>
            args.positional('note', {
                type: 'string',
                description: 'The content of the note to create',
            }),
        (argv) => {
            console.log(argv.note)
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
        async () => {}
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
        async () => {}
    )
    .command(
        'remove <id>',
        'remove a note by id',
        (args) =>
            args.positional('id', {
                type: 'number',
                description: 'The id of the note you want to remove',
            }),
        async () => {}
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
        async () => {}
    )
    .demandCommand(1)
    .parse()
