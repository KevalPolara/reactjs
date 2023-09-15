import React, { useState } from 'react';
import "./Input.css"

function Search(props) {
    const [input,SetInput]=useState("");

    const data=async(value)=>{

        const response = await fetch("https://fakestoreapi.com/products");

        const data = await response.json();
        console.log(data);

        
    }

    const handleChange=(value)=>{
        SetInput(value);
        data(value);
    }
    return (
        <div className='form'>
          <form>
            <input type='search' placeholder='Search Here' value={input} onChange={(e)=>SetInput(e.target.value)}></input>
          </form>
        </div>
    );
}

export default Search;