## getBlock
```js
web3.eth.getBlock(blockHashOrNumber [, returnTransactionObjects] [, callback]);
```
> Fetch a block matching the block number or block hash.
>
> <hr>
>
> #### Parameters
>
> | Parameter | Type | Optional | Default | Description |
> |:-:|:-:|:-:|:-:|:-:|
> | `blockHashOrNumber` | `String\|Number` |  |  |  |
> | `returnTransactionObjects` | `boolean` | yes | `false`  | Include transaction data. |
> | `callback` | `function` | yes |  |  |
>
> #### Returns: `Promise<Object>`
>
> | Property | Type | Description |
> |:-:|:-:|:-:|
> | `number` | `Number` | The block number. `null` if the block is pending. |
> | `hash` | `String` | 32 byte hash of the block. `null` if the block is pending. |
> | `parentHash` | `String` | 32 byte hash of the parent block. |
> | `nonce` | `String` | 8 byte hash of the generated proof-of-work. `null` if the block is pending. |
>
> <hr>
