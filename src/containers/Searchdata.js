import React, { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import "./Card.css"

function Searchdata(props) {
    const [isLoading,SetIsLoading]=useState(true);
    const [data,setData]=useState([]);
    const [search,IsSearch]=useState('');
    const [handlesearch,IsHandleSearch]=useState([]);

    const getData=async()=>{
        const response=await fetch("https://fakestoreapi.com/products");

        const qdata= await response.json();
        setData(qdata);
    }

    useEffect(()=>{
        setTimeout(()=>{
            SetIsLoading(false);
        },3000)
      },[])


    useEffect(()=>{
        getData();
    },[])

   const handleChange=(value)=>{
        IsSearch(value);

       const fdata= data.filter((v)=>v.title.toLowerCase().includes(value.toLowerCase()) ||
        v.price.toString().includes(value.toString())
        )

        IsHandleSearch(fdata);
    }

    const fvdata=handlesearch.length > 0 ? handlesearch : data;
   
    return (
        <div className='row'>
            <form>
            <input type='search' placeholder='Search Here' onChange={(e)=>handleChange(e.target.value)}></input>
            </form>
            {isLoading ? 
    <ClipLoader className='spiner'
    loading={isLoading}
    // cssOverride={override}
    size={30}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
              : 
              
             fvdata.map((v)=>{
               console.log();
               return(
                <div className='col-4 border'>
                    <img src={v.image} className='images'/>
                    <p>{v.title}</p>
                    <p>{v.price}</p>
                    </div>    
               )         
             })
            }
            </div>
        
    );

}

export default Searchdata;