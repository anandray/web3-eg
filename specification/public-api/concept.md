# Public API Layer

This document is describing the base concepts to decouple the internal core API from the exposed public API.

## Namespace

The exported globally existing namespace is called ``web3`` and is a object with methods for setting the default context and all additional used contexts.
This object is handled as singleton and will provide the possibility to connect to different Ethereum based networks.

The [Security Concept]() of the exposed ``web3`` object is explained [here]() .

### Interface

``` typescript

interface web3 {
    protected defaultContext: Context;
    
    init(name: string, context: Context): void; 
    
    add(name: string, context: Context): void; 
    
    get(name: string): Context;
}

```

## Classes And Methods

All internal dependencies are handled through wrapping of the method or pre-injecting required dependencies in to the 
desired class. If the exported class or method is doing any kind of networking related process is it required to define
the optional context parameter as last constructor or method argument. If no context was given to the method or the 
constructor of the class is it required to pass the ``defaultContext`` property from the ``web3`` namespace.

### Classes


Example: 

``` javascript 
import web3 from '../web3.js';
import InternalDependency from './folder/file.js';
import MyClass from './MyClass.js';

export default class PublicApiWrapper extends MyClass {
   /**
   * @constructor
   */
   constructor(context = null) {
     if (context) {
        super(new InternalDependency(), context);
     }
     
     super(new InternalDependency(), web3.defaultContext);
   }
}
```

### Methods 

Exported methods are aliases for static methods of the related value objects or wrappers for JSON-RPC methods.

Example: 

``` javascript 
import Address from '../types/Address';
  
export const isAddress = Address.isAddress;
```

If the exported method is doing any kind of networking action is it required to define a optional ``context: Context`` parameter as last argument of this method.

Example: 

``` javascript 
import web3 from '../web3.js';
import GetBalanceMethod from '../methods/GetBalanceMethod.js';
  
export const myMethod = function(address, context = null) {
  if (context) {
    return new GetBalanceMethod([address], context).execute();
  }
    
  return new GetBalanceMethod([address], web3.defaultContext).execute();
};
```

## Asynchronous Processes 

The Web3.js library will use the native ``Promise`` and the ``Observable`` pattern for asynchronous processes. 
Subscriptions are exclusively here to watch data streams and are implemented with the [Observable of RxJs]().
The reason to use ``RxJs`` is because of the provided features and the popularity of the framework.
