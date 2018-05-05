import React from "react";
import { MapData } from "../../Components";
import { userType } from "../../data";

function ChooseUsers(){
    return (
        <MapData data={ userType } hospital={ false }/>
    );
}

export default ChooseUsers;