import React from "react";
import { Route } from "react-router-dom";
import { ChooseUsers, Hospital, Navbar, ClaimStepper, Burial } from "../../Components"; 

class Home extends React.Component{

    render(){

        return(
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