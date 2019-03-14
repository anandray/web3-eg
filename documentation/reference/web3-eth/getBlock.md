## getBlock
```js
web3.eth.getBlock(blockHashOrNumber [, returnTransactionObjects] [, callback]);
```
> Returns a block matching the block number or block hash.
> <hr>
>
> | Parameter | Type | Optional | Default | Description |
> |:-:|:-:|:-:|:-:|:-:|
> | blockHashOrNumber | `String\|Number` |  |  |  |
> | returnTransactionObjects | `boolean` | yes | `false`  | Include transaction data. |
> | callback | `function` | yes |  |  |
>
> #### Return Object
> | Property | Type | Description |
> |:-:|:-:|:-:|
> | `number` | `Number` | The block number. `null` if the block is pending. |
> | `hash` | `String` | 32 byte hash of the block. `null` if the block is pending. |
> | `parentHash` | `String` | 32 byte hash of the parent block. |
> | `nonce` | `String` | 8 byte hash of the generated proof-of-work. `null` if the block is pending. |
