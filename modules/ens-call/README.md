## ENS Call Module

```
import {CustomMethod} from 'web3-module-eth-call';

const customMethod = new CustomMethod('http://localhost:7545' {});

customMethod.ethCall({to: 'web3.eth', ...}).then(function(response) => {
    console.log(response);
});
``` 