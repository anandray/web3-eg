# The basic API concept of the Web3.js library

This document is describing the bare concept and thoughts behind the interaction with the Web3 library.

## Asynchronous Processes 

The Web3.js library will use the native ``Promises`` and the ``Observable`` pattern for asynchronous processes. 
Subscriptions to any kind of data stream are exposing the ``subscribe`` method from the [Observable]() pattern.
For being compatible with the broader JavaScript community is Web3.js using the RxJs library. Any other asynchronous interaction
will be done with the native Promise.

## Exposing of classes and methods 

### Classes

The following classes are all exposed by the core of Web3 the goal of the public API layer of it is to handle the 
internal dependencies also internally.

#### Context

##### ContextContainer

Closer details about the ``ContextContainer`` and the logic behind it is written down in the core specification.



##### ContextOptions

####

#### Contract



#### Methods



#### Subscriptions



#### Types



#### Providers



#### Wallet


