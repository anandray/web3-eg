import Web3 from "web3";
const web3 = new Web3("https://kovan.infura.io/metamask");

web3.eth.getBlockNumber().then((res, err) => {
  if (err) console.log(err);
  else console.log(res);
});
