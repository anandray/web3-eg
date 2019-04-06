## sign 
```js
web3.eth.accounts.sign(data, privateKey);
```
> Sign arbitrary data. (Read note of counterfeit protection prefix.)
>
> <hr>
>
> #### Parameters
> | Parameter | Type | Optional | Default | Description |
> |:-|:-:|:-:|:-:|:-|
> | `data` | `String` |  |  | Data to sign. |
> | `privateKey` | `String` |  |  | Private key to use. |
> | `returnSignature` | `bool` | yes | false | Return the signature with rsv values. |
>
> #### Returns: `String\|Object`
> 
> | Property | Type | Description |
> |:-|:-:|:-|
> | `message` | `String` | The original message. |
> | `messageHash` | `String` | The hash of `message`. |
> | `r` | `String` | First 32 bytes of the signature. |
> | `s` | `String` | Next 32 bytes of the signature. |
> | `v` | `String` | Recovery value + 27. |
>
> <hr>
>
> !> The `data` parameter is first parsed into UTF-8 characters, and then it is concatenated with `"\x19Ethereum Signed Message:\n" + message.length + message`.
