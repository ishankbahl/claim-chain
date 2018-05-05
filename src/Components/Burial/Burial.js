import React from "react";

import { UploaderComponent } from "../../Components";
import { data } from "../../data";

class Burial extends React.Component{

    render(){

        return(
            <div>
                { data.map((element) => <UploaderComponent details={ element } />) }
            </div>
        );

    }

} 

export default Burial;