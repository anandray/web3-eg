# Usage

To add the library to your project, install with npm (or your preferred package manager)

```
npm install web3
```

> If you prefer to add the package client-side, you can try using [UNPKG](http://unpkg.com/web3).
> Its performance isn't monitored by the maintainers and dependency resolving isn't built-in.

### Package Distribution Files

The npm package includes 3 different distributions. Package managers like webpack usually resolve them correctly, but if necessary you might want to point at a different transpilation.

- `dist/*.esm.js` are the native ES6 modules.
- `dist/*.cjs.js` are Common JavaScript transpiled files.
- `dist/*.umd.js` are [Universal Module Definitions](https://github.com/umdjs/umd) transpiled files.

### Usage with TypeScript

We support types within the web3.js library itself. Please [open an issue here](https://github.com/ethereum/web3.js/issues/new) if you find any wrong typings.

You can use `web3.js` as follows:

```typescript
import Web3 from 'web3';
const web3 = new Web3("ws://localhost:8546");
```

If you are using the types in a `commonjs` module, like a node app, you just have to enable `esModuleInterop` in your `tsconfig` compile option, as well as `allowSyntheticDefaultImports` for typesystem compatibility.

```js
"compilerOptions": {
  "allowSyntheticDefaultImports": true,
  "esModuleInterop": true,
  ...
}
```

### Importing the Library

#### ES6
```js
import Web3 from 'web3';
```

#### Node.js
```js
const Web3 = require('web3');
```

#### Browser
The recommended way to import the web3.js library is to use a package manager such as [webpack](https://webpack.js.org/), [parcel](https://parceljs.org/), or [rollup](https://rollupjs.org/). These will auto-resolve your dependencies and import the files you need.
