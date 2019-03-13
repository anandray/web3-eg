# Setup

In order to use the web3.js API for your specific need you may have to follow some setup steps. Keep in mind that the web3.js library doesn't interact with Ethereum itself! It works as a wrapper that makes it easy to talk with network nodes.

If you already know how blockchain nodes work, you can skip ahead to [node connection](#connecting-to-a-node).

### Introduction to Blockchain Nodes

Blockchains work as a collection of nodes connected to each other, ensuring that everyone agrees on the state of the network. These nodes are programs running on actual computers, much like you would run a deamon or a server.

Client programs are coded in different languages by different groups, but they all try to comply with a [JSON-RPC](https://www.jsonrpc.org/specification) standard. You can find the details [here](https://github.com/ethereum/wiki/wiki/JSON-RPC).

Since this library is *not* a node client, but a wrapper for communication, it cannot directly interact with the network. To access the JSON-RPC we need to provide a connection to a node. There are several alternatives to do this:

- Local node (geth, parity, etc.)
- Remote node (someone else's geth, parity, etc.)
- RPC services (Infura, Etherscan, etc.)

If you haven't worked with any web3 stack technology, it is advisable that you first familiarize yourself with these types of nodes. A crucial difference between a local node and an RPC service such as Infura is that you can't execute procedures that require private keys with Infura!

### Connecting to a Node
