import React from "react";
import { Route } from "react-router-dom";
import { ChooseUsers, Hospital, Navbar } from "../../Components"; 

class Home extends React.Component{

    render(){

        return(
            <div>
                <Navbar />
                <Route exact path="/" component={ChooseUsers} />
                <Route exact path="/hospital" component={Hospital} />
            </div>
        );

    }

}

export default Home;