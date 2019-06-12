# Public API Layer

This document is describing the base concepts to decouple the internal core API from the exposed public API.

## Namespace

The exported globally existing namespace is called ``web3`` and is a object with methods for setting the default context and all additional used contexts.
This object is handled as singleton and will provide the possibility to connect to different Ethereum based networks.

The [Security Concept]() of the exposed ``web3`` object is explained [here]() .

### Interface

``` typescript

namespace web3 {
    protected defaultContext: Context;
    
    init(name: string, context: Context): void; 
    
    add(name: string, context: Context): void; 
    
    get(name: string): Context;
}

```


## Asynchronous Processes 

The Web3.js library will use the native ``Promise`` and the ``Observable`` pattern for asynchronous processes. 
Subscriptions are exclusively here to watch data streams and are implemented with the [Observable of RxJs]().
The reason to use ``RxJs`` is because of the provided features and the popularity of the framework.


## Exposing of classes and methods 

The public API layer will abstract away the underlying core modules of the Web3.js library. The advantage we have with this kind
of software architecture is to decouple the internal API from the external API.

### Classes

Internal dependencies of all exposed classes from the Web3.js library are handled through wrapping of the internal constructor.

Example: 

``` javascript 
import InternalDependency from './folder/file.js';
import MyClass from './MyClass.js';
  
export class PublicMyClass extends MyClass {
  /**
  * @constructor
  */
  constructor() {
      super(new InternalDependency());
  }
}
```

If the exported class is handling any kind of network related actions is it required to define the optional ``context: Context`` parameter as last argument of the constructor.
The default context of the web3 namespace should get injected if no context is given by the developer.  

Web3 Namespace Example:

``` javascript 
import {web3} from 'web3';
import MyClass from './MyClass.js';

export default class PublicApiWrapper extends MyClass {
   /**
   * @constructor
   */
   constructor(context = null) {
     if (context) {
        super(new InternalDependency(), context);
     }
     
     super(new InternalDependency(), web3.get('default'));
   }
}
```

### Methods 

Exported utilities methods are aliases to the static methods of the related value objects. 
All used internal dependencies have to be handled in the corresponding file of the ``public_api`` folder.

Example: 

``` javascript 
import {Address} from 'web3';
  
export const isAddress = Address.isAddress;
```

If the exported method is doing any kind of networking action is it required to define a optional ``context: Context`` parameter as last argument of this method.

Example: 

``` javascript 
import {web3, GetBalanceMethod} from 'web3';
  
export const myMethod = function(address, context = null) {
  if (context) {
    return new GetBalanceMethod([address], context).execute();
  }
    
  return new GetBalanceMethod([address], web3.get('default')).execute();
};
```
