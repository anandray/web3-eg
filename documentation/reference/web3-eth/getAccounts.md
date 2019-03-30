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
> <iframe src="https://codesandbox.io/embed/github/ofrbg/web3-examples/tree/documentation-setup/example-src/packages/web3-eth/getBlockNumber?autoresize=1&fontsize=14&hidenavigation=1&view=editor" title="web3-utils" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
