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
> | `transaction.gas` | `Number` | yes |  |  |
> | `transaction.gasPrice` | `Number` | yes |  |  |
> | `transaction.data` | `String` | yes |  |  |
> | `transaction.nonce` | `Number` | yes |  |  |
>
>
> ?> The `from` property can also be an address or index from `web3.eth.accounts.wallet`.
> It will then sign locally using the private key of that account and send the transaction via `web3.eth.sendSignedTransaction()`.
>
> #### Returns: `PromiEvent`
> | Event | Returns | Description |
> |:-:|:-:|:-:|
> | `"transactionHash"` | `String` | Fired right after the transaction is sent and a transaction hash is available. |
> | `"receipt"` | `Object` | Fired when the transaction receipt is available. |
> | `"confirmation"` | `Number, Object` | Fired on block confirmation, from the mined block to the 12th block after. |
> | `"error"` | `Error[, Object]` | Fired if an error occurs during sending. For out of gas errors, the second parameter is the receipt. |
>
> <hr>
