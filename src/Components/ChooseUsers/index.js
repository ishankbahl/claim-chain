import React from "react";
import { MapData } from "../../Components";
import { userType } from "../../data";

function ChooseUsers(){
    return (
        <div style={{ transform: "translateY(9%)" }} >
            <MapData data={ userType } hospital={ false } />
        </div>
    );
}

export default ChooseUsers;