import web3 from './web3';
import Claim from './build/claim.json';

export default address => {
  return new web3.eth.Contract(JSON.parse(Claim.interface), address);
};
