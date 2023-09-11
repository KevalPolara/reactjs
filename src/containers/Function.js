import React from "react";

export default function profile(prop){
    const red=()=>{
        alert("Function Called");
    }
    return <div>
        <h1 onClick={red}>{prop.text.name}</h1>
        <h1 onClick={red}>{prop.data}</h1>
    </div>
}