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
> |:-|:-:|:-:|:-:|:-|
> | `blockHashOrNumber` | `String\|Number` |  |  |  |
> | `returnTransactionObjects` | `boolean` | yes | `false`  | Include transaction data. |
> | `callback` | `function` | yes |  |  |
>
> #### Returns: `Promise<Object>`
>
> | Property | Type | Description |
> |:-|:-:|:-|
> | `number` | `Number` | The block number. `null` if the block is pending. |
> | `hash` | `String` | 32 byte hash of the block. `null` if the block is pending. |
> | `parentHash` | `String` | 32 byte hash of the parent block. |
> | `nonce` | `String` | 8 byte hash of the generated proof-of-work. `null` if the block is pending. |
> | `sha3Uncles` | `String` | 32 byte SHA3 hashes of the uncles data.  |
> | `logsBloom` | `String` | 256 byte bloom filter of the logs. `null` if the block is pending.  |
> | `transactionsRoot` | `String` | 32 byte root of the transaction trie.  |
> | `stateRoot` | `String` | 32 byte root of the final state of the trie.  |
> | `receiptsRoot` | `String` | 32 byte receipt root.  |
> | `miner` | `String` | Address of the beneficiary of the mining reward.  |
> | `difficulty` | `String` | Integer of the total difficuly of the fetched block.  |
> | `totalDifficulty` | `String` | Cummulative difficulty of the chain up to the fetched block.  |
> | `extraData` | `String` | "Extra data" field of the block.  |
> | `size` | `Number` | Size of the block in bytes. |
> | `gasLimit` | `Number` | Maximum gas allowed in the block.  |
> | `gasUsed` | `Number` | Total gas used by the transaction in this block. |
> | `timestamp` | `Number` | UNIX timestamp of the minting time assigned by the miner to the block. |
> | `transactions` | `Array` | 32 byte hashes of the transactions, or the transaction objects if `returnTransactionObjects` is true. |
> | `uncles` | `Array` | Array of uncle hashes of this block. |
>
> <iframe src="https://codesandbox.io/embed/github/ofrbg/web3-examples/tree/documentation-setup/example-src/packages/web3-eth/getBlockNumber?autoresize=1&fontsize=14&hidenavigation=1&view=editor" title="web3-utils" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
> <hr>
