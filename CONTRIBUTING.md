# Contribution Template

## API Reference

## methodNameOrProperty
```js
web3.module.methodNameOrProperty(params [, optionalParams]);
```
> Description 
>
> <hr>
>
> #### Parameters
>
> | Parameter | Type | Optional | Default | Description |
> |:-|:-:|:-:|:-:|:-|
> | `paramName` | `type` |  |  |  |
>
> #### Returns: `type`
>
> | Property | Type | Description |
> |:-|:-:|:-|
> | `propName` | `type` | 7-12 word description |
>
> <hr>
> 
> ?> Info
> 
> !> Warning
>
> <codesandbox>module-path/methodNameOrProperty</codesandbox>


## Example Microproject

#### Directory Structure

The name of the example directory **must** match its counterpart in `documentation/reference`.

```
.
+-- documentation/
|   +-- getting-started/
|   |-- ...
|   +-- reference/
|       +-- module-name/
|           +-- methodNameOrProperty/
|               +-- index.js
|               |-- sandbox.config.js
|               |-- package.json
|               +-- test/
|                    +-- index.spec.js
+-- example-src/
    +-- module-name/
        +-- methodNameOrProperty/
            +-- index.js
            |-- sandbox.config.js
            |-- package.json
            +-- test/
                +-- index.spec.js
```

#### `example-src` files

###### `package.json`
```js
{
  "name": "methodNameOrProperty",
  "version": "x.x.x",
  "main": "index.js",
  "scripts": {
    "start": "parcel index.html --open",
    "build": "parcel build index.html"
  },
  "dependencies": {
    "web3": "latest"
  }
}
```

###### `sandbox.config.js`
```js
{
  "infiniteLoopProtection": true,
  "hardReloadOnChange": false,
  "view": "browser",
  "template": "parcel"
}
```

###### `index.js`
```js
import Web3 from "web3";
const web3 = new Web3("https://kovan.infura.io/metamask");

async function main() {
  /* demo here */
}

main();

export default main;
```

###### `test/index.spec.js`
```js
import example from '../index.js';
import Web3 from "web3";
const web3 = new Web3("https://kovan.infura.io/metamask");

it('get the block data', async () => {
  const res = await example();
  expect(res).toHaveProperty('number');
});
```
