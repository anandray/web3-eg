### IN PROGRESS

# Web3 Documentation

Documentation, API reference, architecture specification and templates for the Web3.js library.

## Getting Started

Install docsify and serve the docs locally.

```bash
npm install
npm run compile
npm run start
```

### Prerequisites

NodeJS, Python, git (for git bash), and npm are required to run and test.

## Running the tests

```bash
npm run build
npm run test
```

## Repo Structure

The documentation and the related examples are located in the `documentation` and `example-src` folder.
The technical specification of the public API and the architecture of Web3.js is located in the `specification` folder. 

## Testing of the Documentation

Inside the `documentation`  folder you'll find a file called `config.js`. 
This JS object contains the paths used by the plugins to replace the `<codesandbox>` tag with the embed.
To test your examples, set `orgName` to your Github username, and `branch` to the live branch (i.e. live on Github) with the example code.

The documentation examples are tested to have a automated proof for the correctness of the Web3.js documentation.

## Contributing

In [CONTRIBUTING.md](CONTRIBUTING.md) you can find the templates for the API docs reference, as well as the structure for the example packages.

## Authors

* **Oscar "Cehhiro" Fonseca** - contributor - [OFRBG](https://github.com/OFRBG)
* **Samuel Furter** - contributor - [nivida](https://github.com/nivida)

See also the list of [contributors](https://github.com/ethereum/web3-examples/contributors) who participated in this project.
