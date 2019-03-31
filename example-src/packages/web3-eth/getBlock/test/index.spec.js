import example from '../index.js';
import Web3 from "web3";
const web3 = new Web3("https://kovan.infura.io/metamask");

it('get the block data', async () => {
  const res = await example();
  expect(res).toHaveProperty('number');
});
