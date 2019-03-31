import Web3 from "web3";
const web3 = new Web3("https://kovan.infura.io/metamask");

async function main() {
  const block = await web3.eth.getBlock("latest").catch(console.error);
  return block;
}

export default main;
