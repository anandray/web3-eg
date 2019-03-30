web3.eth.getBlockNumber().then((res, err) => {
  if (err) console.log(err);
  else console.log(res);
});
