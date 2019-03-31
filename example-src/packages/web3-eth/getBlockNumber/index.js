import Web3 from "web3";
const web3 = new Web3("https://kovan.infura.io/metamask");

async function main() {
  const blockNumber = await web3.eth.getBlockNumber().catch(console.error);
  return blockNumber;
}

export default main;
