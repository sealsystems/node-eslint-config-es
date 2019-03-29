## 3.2.5 (2019-03-29)

### Bug Fixes


#### Do not capture stdout of depcheck to prevent problems on CI servers ([6d340c4](https://github.com/sealsystems/node-eslint-config-es/commit/6d340c4))



---

## 3.2.4 (2019-03-29)

### Chores


#### Update dependencies ([838e0d4](https://github.com/sealsystems/node-eslint-config-es/commit/838e0d4))



---

## 3.2.3 (2019-03-17)

### Bug Fixes


#### Deactivate Jest rule conflicting with Mocha ([1d86dd7](https://github.com/sealsystems/node-eslint-config-es/commit/1d86dd7))



---

## 3.2.2 (2019-03-17)

### Bug Fixes


#### Call Node binary to fix Windows builds ([61139d4](https://github.com/sealsystems/node-eslint-config-es/commit/61139d4))



---

## 3.2.1 (2019-03-17)

### Chores


#### Switch to Jest ([2a7ae9b](https://github.com/sealsystems/node-eslint-config-es/commit/2a7ae9b))



---

## 3.2.0 (2019-03-17)

### Bug Fixes


#### Make Jest rules compatible with Mocha ([955d794](https://github.com/sealsystems/node-eslint-config-es/commit/955d794))

### Features


#### Add rules for Jest ([3630b11](https://github.com/sealsystems/node-eslint-config-es/commit/3630b11))



---

## 3.1.1 (2019-03-17)

### Bug Fixes


#### Remove broken reflection rule ([ccb03f0](https://github.com/sealsystems/node-eslint-config-es/commit/ccb03f0))



---

## 3.1.0 (2019-03-17)

### Features


#### Ignore @sealsystems/semantic-release-config when checking for missing dependencies ([9fd6990](https://github.com/sealsystems/node-eslint-config-es/commit/9fd6990))



---

## 3.0.0 (2019-03-17)

### Features


#### Include ESLint and extend rules ([87d2c37](https://github.com/sealsystems/node-eslint-config-es/commit/87d2c37))

The ESLint binary is included in the `package.json`. It is no longer necessary to include it as a devDependency in all projects.

Some scripts provided by this module can be used to test the code of a project. See README.md for more details.


### BREAKING CHANGES

#### Rules are added to match the behavior of older ESLint configurations used

---
