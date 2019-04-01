# @sealsystems/eslint

ESLint executable and configuration for SEAL Systems

## Installation

```bash
npm install --save-dev @sealsystems/eslint
```

## Quick start

Create a file with the name `.eslintrc.json` in the root directory of your project. It should contain at least the following lines:

```json
{
  "extends": "@sealsystems/eslint"
}
```

ESLint is installed as a dependency of `@sealsystems/eslint`. So you can call `eslint` from the root directory of your project:

```shell
$(npm bin)/eslint **/*.js
```

Please note:

- In order to install all dependencies directly in the project's `node_modules` folder, you may need to delete `package-lock.json` before adding this package.

The package also provides 3 CLI executables:

- `bot` runs the following checks:

  - ESLint

  - Unit Tests by calling `npm run test`

  - Missing or unused dependencies (aborts the test run only if `package.json` does not contain a dependency)

  - Outdated dependencies (never aborts the test run)

  In case of an error, the returned status code indicates the number of the failed test

- `lint` runs ESLint

- `lint-fix` runs ESLint with the option `--fix`

Please note:

- ESLint ignores all files and directories listed in the project's `.gitignore`.

- To get a completely colorized output, you must force NPM to always use color:  
  `npm config set color always`

To use these binaries, add some scripts to your `package.json`:

```json
...
"scripts": {
  "bot": "bot",
  "lint": "lint",
  "lint:fix": "lint-fix"
}
...
```

And call them via `npm run`:

```shell
npm run bot
npm run lint
npm run lint:fix
```
