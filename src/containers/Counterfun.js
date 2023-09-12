import React, { useState } from 'react';

function Counterfun(props) {
    const [number,setNumber]= useState(0);

    const increment=()=>{
        if(number<50){
        setNumber(number+1)     
        }
    }

    const decrement=()=>{
        if(number>0){
        setNumber(number-1)  
        }
    }
    return (
        <div>
            <h1>Counter</h1>
            <button onClick={increment}>+</button>
            <br></br>
            {number}
            <br></br>
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default Counterfun;