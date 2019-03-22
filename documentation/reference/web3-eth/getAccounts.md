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
