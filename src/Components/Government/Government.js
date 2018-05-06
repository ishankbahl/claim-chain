import React from 'react';

import { UploaderComponent } from '../../Components';
import { data, accounts } from '../../data';

import address from '../../utils/claim';
import web3 from '../../utils/web3';

const style = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around'
};

class Burial extends React.Component {
  state = {
    claim: null,
    account: accounts[6]
  };
  async componentDidMount() {
    let a = await address('0x8cdaf0cd259887258bc13a92c0a6da92698644c0');
    this.setState({
      claim: a
    });
  }

  upload = async (hash, address) => {
    const details = {
      from: this.state.account,
      gas: 4712388,
      gasPrice: 100000000000
    };

    let x = await this.state.claim.methods
      .issueDeathCertificate(String(address), String(hash))
      .send(details);

    // let y = await this.state.claim.customerList(0);
    // console.log('dfdfds', y);
  };
  render() {
    return (
      <div style={style}>
        {data.map(element => (
          <UploaderComponent details={element} upload={this.upload} />
        ))}
      </div>
    );
  }
}

export default Burial;
