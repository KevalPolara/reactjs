import React, { useEffect, useState } from "react";
import './Card.css';
import "./Input.css";

function Product(props) {
  const [isLoading, SetIsLoading] = useState(true);
  const [qdata, SetData] = useState([]);
  const [input,SetInput]=useState("");
  const [search,finalData]=useState([]);

  const getData = async () => {
    const response = await fetch("https://type.fit/api/quotes");

    const data = await response.json();
    
     SetData(data);
    SetIsLoading(false);
  };

  const handleChange =(value)=>{
    SetInput(value);
   let fdata= qdata.filter((v)=>v.text.toLowerCase().includes(value.toLowerCase()) ||
    v.author.toLowerCase().includes(value.toLowerCase())
    )
    finalData(fdata);
  }

  let fvdata=search.length > 0 ? search : qdata
  
  useEffect(() => {
    getData();
  }, []);

  return (
   
    <div className="row">
        

      {
      isLoading
        ? <p>Loading...</p>
        :
        <>
        <input type='search' placeholder='Search Here' onChange={(e)=>handleChange(e.target.value)}></input>
     
        {fvdata.map((v) => {

            return (
                    <div className="col-4 border">
                      <p>Quote:-{v.text}</p>
                      <p> Author:-{v.author}</p>
                    </div>      
            );
        })
        }
          </>

      }
    </div>
  );
}

export default Product;
