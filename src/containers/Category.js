import React, { useEffect, useState } from 'react';
import "./Category.css";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
  } from "reactstrap";

function Category(props) {
    const [isLoading,SetIsLoading]=useState(true);
    const [search,setSearch]=useState('');
    const [data,SetData]=useState([]);
    const [input,SetInput]=useState([]);
    const [active,SetActive]=useState(null);
    
    const getData=async()=>{
        const response=await fetch("https://dummyjson.com/products");

        const fdata= await response.json();
        console.log(fdata);
        SetData(fdata.products);
        SetIsLoading(false);
    }

    useEffect(()=>{
        getData();
    },[])
                      
    const handleButton=(value,number)=>{
        SetActive(number);

        let as=setSearch(value);
        console.log(as);
       let qdata= data.filter((v)=>v.category.toLowerCase().includes(value.toLowerCase()));

       SetInput(qdata);  
       
       if(value==='A to Z'){
        let ans=[...data].sort(function(a,b){return a.price-b.price});
        console.log(ans);
        SetInput(ans);
       }else if(value==='Z to A'){
        let ans=[...data].sort(function(a,b){return b.price-a.price});
        console.log(ans);
        SetInput(ans);
       }else if(value==='High to Low'){
        let ans=[...data].sort(function(a,b){return a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1 });
        SetInput(ans);
       }else if( value==='Low to High'){
        let ans=[...data].sort(function(a,b){return a.title.toLowerCase() >b.title.toLowerCase() ? 1 : -1});
        SetInput(ans);
       }
    }

  let fvdata=input.length > 0 ? input : data
    return (

        <div>
            {
            isLoading ? <p>Loading....</p> :

                    <>
                    <h1 className='text-center'>Category</h1> 
                    <button className='btn btn-outline-danger hello'  onClick={()=>handleButton('',1)} style={{ backgroundColor: active === 1 ? 'black' : ''}}>All</button>
                    <button className='btn btn-outline-danger hello'  onClick={()=>handleButton('smartphones',2)} style={{ backgroundColor: active === 2 ? 'black' : ''}}>smartphones</button>
                    <button className='btn btn-outline-danger hello'  onClick={()=>handleButton('laptops',3)} style={{ backgroundColor: active ===3 ? 'black' : ''}}>laptops</button>
                    <button className='btn btn-outline-danger hello'  onClick={()=>handleButton('fragrances',4)} style={{backgroundColor:active===4 ? "black" : ""}}>fragrances</button>
                    <button className='btn btn-outline-danger hello'  onClick={()=>handleButton('skincare',5)} style={{backgroundColor:active===5 ? "black" : ""}}>skincare</button>
                    <button className='btn btn-outline-danger hello'  onClick={()=>handleButton('groceries',6)}  style={{backgroundColor:active===6 ? "black" : ""}}>groceries</button>
                    <button className='btn btn-outline-danger hello'  onClick={()=>handleButton('home-decoration',7)} style={{backgroundColor:active===7 ? "black" : ""}}>home-decoration</button>
                    <button className='btn btn-outline-danger hello'  onClick={()=>handleButton('Low to High',8)} style={{backgroundColor:active===8 ? "black" : ""}}> A to Z</button>
                    <button className='btn btn-outline-danger hello'  onClick={()=>handleButton('High to Low',9)} style={{backgroundColor:active===9 ? "black" : ""}}> Z to A</button>
                    <button className='btn btn-outline-danger hello'  onClick={()=>handleButton('A to Z',10)}  style={{backgroundColor:active===10 ? "black" : ""}}>Low to High</button>
                    <button className='btn btn-outline-danger hello'  onClick={()=>handleButton('Z to A',11)} style={{backgroundColor:active===11 ? "black" : ""}} >High to Low</button>
                         
            <div className='row margin'> 
            {fvdata.map((v)=>{
                return(    
                <div className="col-4 mb-5">
                    <Card
        style={{
          width: "18rem"
        }}
      >
        <img alt="Sample" src={v.thumbnail} className='images'/>
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {v.title}
          </CardSubtitle>
          <CardText>
            ₹{v.price}
          </CardText>
        </CardBody>
      </Card>
              </div>          
                )  
             }) } 
              </div>
             </>       
            } 
        </div>
    );
}
export default Category;
