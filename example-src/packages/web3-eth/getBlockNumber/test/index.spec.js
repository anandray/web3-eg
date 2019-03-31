import example from '../index.js';
import Web3 from "web3";
const web3 = new Web3("https://kovan.infura.io/metamask");

it('get the block number', async () => {
  const res = await example();
  expect(res).not.toBeNaN();
});
