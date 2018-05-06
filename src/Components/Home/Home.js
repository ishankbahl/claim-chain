import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Typography from "material-ui/Typography";

import {
  ChooseUsers,
  Hospital,
  Navbar,
  ClaimStepper,
  Burial,
  Government,
  Insurer
} from '../../Components';

import address from '../../utils/claim';
import web3 from '../../utils/web3';

class Home extends React.Component {

  constructor(){

    super();

    this.state = {

        currentRoute: "/",
        heading: "You are..."

    };

    this.heading = this.heading.bind(this);

  }

  componentWillMount(){

    switch(this.props.location.pathname){
        case '/insurer': this.setState({ heading: "Insurer" });
                break;
        case '/nominee': this.setState({ heading: "Nominee" });
                break;
        case '/hospital': this.setState({ heading: "Hospital" });
                break;
        case '/government': this.setState({ heading: "Government" });
                break;
        case '/burial': this.setState({ heading: "Burial Site" });
                break;
        case '/': ;
            break;
    }    

  }

  async componentDidMount() {
    let claim = await address('0x8cdaf0cd259887258bc13a92c0a6da92698644c0');
    console.log(claim);
    let x = await web3.eth.getAccounts();
    console.log(x, '45546');
  }

  heading(){

    switch(this.props.location.pathname){
        case '/insurer': this.setState({ heading: "Insurer" });
                break;
        case '/nominee': this.setState({ heading: "Nominee" });
                break;
        case '/hospital': this.setState({ heading: "Hospital" });
                break;
        case '/government': this.setState({ heading: "Government" });
                break;
        case '/burial': this.setState({ heading: "Burial Site" });
                break;
        case '/': ;
            break;
    }

  }

  render() {
    return (
      <div>
        <Navbar />
        <span style={{padding: "25px"}} ></span>
        <div style={{marginLeft: "50px"}} >
            <Typography gutterBottom variant="headline" component="h2" >
                {this.state.heading}
            </Typography>
        </div>
        <span style={{padding: "25px"}} ></span>
        <Route exact path="/" component={ChooseUsers} />
        <Route exact path="/hospital" component={Hospital} />
        <Route exact path="/nominee" component={ClaimStepper} />
        <Route exact path="/burial" component={Burial} />
        <Route exact path="/government" component={Government} />
        <Route exact path="/insurer" component={Insurer} />
      </div>
    );
  }
}

export default withRouter(Home);
