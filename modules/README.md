## Web3 Modules

You will find in this folder some examples of Web3 modules.

### Modules

- [ENS Call Method](modules/ens-call)

### Creation of a module

The Web3.js library does expose the ```AbstractWeb3Module``` for creating an Web3 compatible module. All the default properties and methods such as ```setProvider()``` are included in the ```AbstractWeb3Module```. 
If you provide a object of type ```MethodFactory``` and ```MethodModuleFactory``` over the ```AbstractWeb3Module``` constructor it will return a ES6 Proxy object for handling all the method calls on the module object. Please have a look at the [ENS Call Method](modules/ens-call) example for seeing the ```MethodFactory``` in action.

#### Example 

```js
import {AbstractWeb3Module} from 'web3-core';

export default MyCustomModule extends AbstractWeb3Module {
  /**
   * @constructor
   */
  constructor(...) {
    super(...);
  } 
  
  ...
}
```
