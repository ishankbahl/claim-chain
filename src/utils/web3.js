import Web3 from 'web3';

let web3;
const url = 'http://localhost:9545/';
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  web3 = new Web3(window.web3.currentProvider);
} else {
  const provider = new Web3.providers.HttpProvider(url);
  web3 = new Web3(provider);
}

export default web3;
