## sendTransaction 
```js
web3.eth.sendTransaction(transaction [, callback]);
```
> Send a transaction to the network.
>
> <hr>
>
> #### Parameters
> | Parameter | Type | Optional | Default | Description |
> |:-:|:-:|:-:|:-:|:-:|
> | `transaction` | `Object` |  |  |  |
> | `transaction.from` | `String\|Number` |  | `defaultAccount` |  |
> | `transaction.to` | `String` | yes |  | Leave `undefined` for contract deployment. |
> | `transaction.value` | `Number\|String\|BN\|BigNumber` | yes |  | Value to include, in wei. |
>
> #### Returns: `PromiEvent`
>
> <hr>
>
> #### Info
> The from property can also be an address or index from the `web3.eth.accounts.wallet`.
> It will then sign locally using the private key of that account and send the transaction via `web3.eth.sendSignedTransaction()`.
