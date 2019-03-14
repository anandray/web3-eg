# Connecting to a Node

The umbrella term for these nodes is *provider*. You can set the provider in the constructor of the web3 instance.

```js
const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
```

The library will try to find the best provider type match for the supplied connection. (In the example above, it will resolve to an `HttpProvider` instance.) The package also includes a property `givenProvider`, which looks at the current environment and imports the existing provider configuration if available.

If your code is running in a window where MetaMask is available, `Web3.givenProvider` will take MetaMask's provider configuration and set it for your website's web3 object. If nothing was found, `Web3.givenProvider` is undefined and by JavaScript execution rules, the expression after the `||` will be evaluated.

When no provider is successfully found, you won't be able to interact with the network, and the method calls will fail. Even when using handy providers such as the MetaMask inpage provider, you will be connecting to a network node somewhere.

### Modern Providers

Over time, connection to nodes has become increasingly complex. Some browsers or extensions have built their own provider abstraction, such as the highly versatile [`provider-engine`](https://github.com/MetaMask/provider-engine). To unify the interface of these multiple provider abstractions, [EIP-1193](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1193.md) aims to standarize the minimal required behavior.

> Providers are a developing topic, and not every group keeps up with the standards or wishes to fully comply. This library tries to be as compatible as possible while still respecting the standards. You might find implementations of wallet providers that randomly stop working due to incompatibilities. When that happens, notify the maintainers of said wallet.
