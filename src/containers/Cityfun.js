import React from 'react';

function Cityfun({countryName}) {
    return (
        <div>
            <h1>City Function Based Component</h1>
            <h1>Country:{countryName}</h1>
            <h1>City:{countryName==="Bharat" ? "Surat" : "London"}</h1>
        </div>
    );
}
export default Cityfun;