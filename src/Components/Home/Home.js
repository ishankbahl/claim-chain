import React from 'react';
import { Route } from 'react-router-dom';
import {
  ChooseUsers,
  Hospital,
  Navbar,
  ClaimStepper,
  Burial
} from '../../Components';

import address from '../../utils/claim';
import web3 from '../../utils/web3';

class Home extends React.Component {

  async componentDidMount() {
    let claim = await address('0x8cdaf0cd259887258bc13a92c0a6da92698644c0');
    console.log(claim);
    let x = await web3.eth.getAccounts()
    console.log(x, "45546");
  }

  render() {
    return (
      <div>
        <Navbar />
        <Route exact path="/" component={ChooseUsers} />
        <Route exact path="/hospital" component={Hospital} />
        <Route exact path="/nominee" component={ClaimStepper} />
        <Route exact path="/burial" component={Burial} />
      </div>
    );
  }
}

export default Home;
