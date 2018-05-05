import React from "react";
import { MapData } from "../../Components";
import { data } from "../../data";

function Hospital(){
    return (
        <MapData data={ data } hospital={ true } />
    );
}

export default Hospital;