import React, { useEffect, useState } from 'react';
// import { Button } from 'bootstrap';
import "./Category.css";

function Category(props) {
    const [isLoading,SetIsLoading]=useState(true);
    const [search,setSearch]=useState('');
    const [data,SetData]=useState([]);
    const [input,SetInput]=useState([]);
    
    const getData=async()=>{
        const response=await fetch("https://dummyjson.com/products");

        const fdata= await response.json();
        console.log(fdata);
        SetData(fdata.products);
        SetIsLoading(false)
    }

    useEffect(()=>{
        getData();
    },[])

    
    const handleButton=(value)=>{
        setSearch(value);

       let qdata= data.filter((v)=>v.category.toLowerCase().includes(value.toLowerCase()));

        SetInput(qdata);  
    }

  let fvdata=input.length > 0 ? input : data


    return (

        <div className='row'>
            <button className='btn btn-primary' onClick={(e)=>handleButton('')}>All</button>
            <button className='btn btn-primary' onClick={(e)=>handleButton('smartphones')}>smartphones</button>
            <button className='btn btn-primary' onClick={(e)=>handleButton('laptops')}>laptops</button>
            <button className='btn btn-primary' onClick={(e)=>handleButton('fragrances')}>fragrances</button>
            <button className='btn btn-primary' onClick={(e)=>handleButton('skincare')}>skincare</button>
            <button className='btn btn-primary' onClick={(e)=>handleButton('groceries')}>groceries</button>
            <button className='btn btn-primary' onClick={(e)=>handleButton('home-decoration')}>home-decoration</button>


            {isLoading ? <p>Loading....</p> :
            
            
            fvdata.map((v)=>{
                return(
                    <div className="col-4 border">
                <img src={v.thumbnail} className="images" />
                <p>
                  {v.title}
                </p>
                <p>
                  ₹{v.price}
                </p>
              </div>
                )
                
             })   
            
            } 
                       
        </div>
    );
}

export default Category;