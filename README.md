# Node.js v3

## Install and configure Prettier (formatting rules) and ESLint (static code analysis, code quality rules)

Use Prettier for formatting and linters for catching bugs!
Install both prettier, eslint and eslint-config-prettier:

### NOTE: For The editor use the Daemons

```bash
npm i -D @fsouza/prettierd eslint_d
```

```bash
npm i --save-dev prettier eslint eslint-config-prettier
```

Is the same as:

```bash
npm i -D prettier eslint eslint-config-prettier
```

Create ESLint config file:

```bash
npm init @eslint/config
```

Modify Prettier config file accordingly:

-   .prettier.json

Modify ESLint config file accordingly:

-   .eslintrc.cjs

Select:

1.  To check syntax, find problems, and enforce code style
2.  JavaScript modules (import/export)
3.  None of these
4.  No
5.  Node
6.  Use a popular style guide
7.  Airbnb: https://github.com/airbnb/javascript
8.  JavaScript

Then install dependencies:

-   eslint-config-airbnb-base@latest
-   eslint@^7.32.0 || ^8.2.0
-   eslint-plugin-import@^2.25.2

## Use Prettier

```bash
npm i --save-dev prettier
```

Check which files will be modified by prettier (from project root):

```bash
npx prettier src --check

```

Format all files in src:

```bash
prettier src --write
```

## Use ESLint

```bash
npm i --save-dev eslint

```

Run eslint on src folder:

```bash
npx eslint src
```

Run eslint on index.js file:

```bash
npx eslint index.js

```

## Execute JS program

```bash
node index.js
```

## Execute JS CLI

```bash
note-node-cli "note 1"
```

## Enter Node REPL

```bash
node
```

## Test (Jest)

Install Module:

```bash
npm install --save-dev jest
```

Get Jest Globals (mocks)

```bash
npm install --save-dev @jest/globals
```

Inside (./package.json) add (because we are using modules we have to do that):

```json
{
    "scripts": {
        "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js",
        "testWithModules": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
    }
}
```

Run test command:

```bash
npm test

```

Run test command:

```bash
npm run testWithModules

```

Inside (./package.json) add:

```json
{
    "scripts": {
        "testWithoutModules": "jest"
    }
}
```

Run test command:

```bash
npm run testWithoutModules

```

Or:

```bash
npm test
```

## Vanilla Server

Utility to automatically open the browser from the CLI:

```bash
npm i open
```
