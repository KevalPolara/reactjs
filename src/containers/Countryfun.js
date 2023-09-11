// Function Based Components:-

import React, { useState } from 'react';

function Countryfun(props) {
    // Make a Hook:-
    const [countryname,setCountryname]=useState('Bharat');

    const changeCountry=()=>{
        setCountryname('UK');
    }
    return (
        <div>
            <h1>Country Components</h1>
            <h2>Country Name:{countryname}</h2>
            <button onClick={changeCountry}>changeCountry</button>
        </div>
    );
}

export default Countryfun;

