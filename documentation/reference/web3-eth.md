# web3-eth
    
## getAccounts
```js
web3.eth.getAccounts([callback]);
```
> Fetch the accounts available to the module's provider.
>
> <hr>
>
> #### Parameters
> | Parameter | Type | Optional | Default | Description |
> |:-|:-:|:-:|:-:|:-|
> | `callback` | `function` | yes |  |  |
>
> #### Returns: `Promise<Array>`
>
> <hr>
>
> #### RPC Info
> Returns a list of accounts the provider can access.
> The library calls the RPC method `eth_accounts`, but custom providers might override this.
>
> Using `web3.eth.accounts.create()` will not add accounts into this list.
> For that use `web3.eth.personal.newAccount()`.
> The results are the same as `web3.eth.personal.getAccounts()`, but by calling the RPC method `personal_listAccounts`.
## getBalance 
```js
web3.eth.getBalance(address [, block] [, callback]);
```
> Get the balance of an address at a given block height.
>
> <hr>
>
> #### Parameters
>
> | Parameter | Type | Optional | Default | Description |
> |:-|:-:|:-:|:-:|:-|
> | `address` | `String` |  |  |  |
> | `block` | `Number` | yes | `defaultBlock`  |  |
> | `callback` | `function` | yes |  |  |
>
> #### Returns: `Promise<String>`
>
> <hr>
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
> <hr>
>
> <codesandbox>web3-eth/getBlock</codesandbox>
## getBlockNumber 
```js
web3.eth.getBlockNumber([callback]);
```
> Return the current block number.
>
> <hr>
>
> #### Returns: `Promise<Number>`
>
> <hr>
>
> <codesandbox> web3-eth/getBlockNumber </codesandbox>
## getBlockTransactionCount 
```js
web3.eth.getBlockTransactionCount(blockHashOrNumber [, callback]);
```
> Get the number of transaction in a given block.
>
> <hr>
>
> #### Parameters
> | Parameter | Type | Optional | Default | Description |
> |:-|:-:|:-:|:-:|:-|
> | `blockHashOrNumber` | `String\|Number` |  |  | Also accepts `"genesis"`,`"latest"`, or `"pending"`. |
> | `callback` | `function` | yes |  |  |
>
> #### Returns: `Promise<Number>`
>
> <hr>
## getCode 
```js
web3.eth.getCode(address [, defaultBlock] [, callback]);
```
> Get the code at a specific address.
>
> <hr>
>
> #### Parameters
> | Parameter | Type | Optional | Default | Description |
> |:-|:-:|:-:|:-:|:-|
> | `address` | `String` |  |  |  |
> | `defaultBlock` | `Number\|String` | yes | `defaultBlock` |  |
> | `callback` | `function` | yes |  |  |
>
> #### Returns: `Promise<String>`
>
> <hr>
## getGasPrice
```js
web3.eth.getGasPrice([callback]);
```
> Returns the current gas price oracle.
> The gas price is determined by the last few blocks median gas price. GasPrice is the wei per unit of gas.
>
> <hr>
>
> #### Returns: `Promise<String>`
>
> <hr>
## getHashrate
```js
web3.eth.getHashrate([callback]);
```
> Return the number of hashes per second that the node is mining with.
>
> <hr>
>
> #### Returns: `Promise<Number>`
>
> <hr>
## getStorageAt
```js
web3.eth.getStorageAt(address, position [, defaultBlock] [, callback]);
```
> Get the storage at a specific position of an address.
>
> <hr>
>
> #### Parameters
> | Parameter | Type | Optional | Default | Description |
> |:-|:-:|:-:|:-:|:-|
> | `address` | `String` |  |  |  |
> | `position` | `Number` |  |  |  |
> | `defaultBlock` | `Number\|String` | yes | `defaultBlock` |  |
> | `callback` | `function` | yes |  |  |
>
> #### Returns: `Promise<String>`
>
> <hr>
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
> |:-|:-:|:-:|:-:|:-|
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
> |:-|:-:|:-|
> | `"transactionHash"` | `String` | Fired right after the transaction is sent and a transaction hash is available. |
> | `"receipt"` | `Object` | Fired when the transaction receipt is available. |
> | `"confirmation"` | `Number, Object` | Fired on block confirmation, from the mined block to the 12th block after. |
> | `"error"` | `Error[, Object]` | Fired if an error occurs during sending. For out of gas errors, the second parameter is the receipt. |
>
> <hr>
