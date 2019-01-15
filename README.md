# @sealsystems/eslint-config-es

ESLint configuration for projects at SEAL Systems

## Installation

```bash
npm install --save-dev @sealsystems/eslint-config-es
```

## Quick start

Create a file with the name `.eslintrc` in the root directory of your project. It should contain at least the following lines:

```json
{
  "extends": "@sealsystems/eslint-config-es"
}
```

Then add `eslint` to your project:

```bash
npm install --save-dev eslint
```

Then you can call `eslint` from the root directory of your project

```bash
$(npm bin)/eslint **/*.js
```

or add some calls as scripts to your `package.json`

```json
...
"scripts": {
  "analyze": "$(npm bin)/eslint **/*.js $*",
  "fix": "npm run analyze -- --fix"
}
...
```

and then call

```bash
npm run analyze
npm run fix
```
