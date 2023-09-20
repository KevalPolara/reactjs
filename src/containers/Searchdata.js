import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./Card.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

function Searchdata(props) {
  const [isLoading, SetIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, IsSearch] = useState("");
  const [handlesearch, IsHandleSearch] = useState([]);
  const [sort,SetSort]=useState('');
  const [buttonsearch,SetButtonSearch]=useState([]);
  const [seleactCat,setSelectCat]=useState('');
  const [active,SetActive]=useState(false);


  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");

    const qdata = await response.json();
    let cat=[];
     qdata.map((v)=>{
      if(!cat.includes(v.category)){
        cat.push(v.category);
      }
    })
    SetButtonSearch(cat);
   
    console.log(qdata);
    setData(qdata);
  };

  useEffect(() => {
    setTimeout(() => {
      SetIsLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    getData();
  }, []);
   
  
  
  const setSortSearch=(value)=>{
    // console.log("okay",value);
    // SetActive(!active)

    let fdata = data.filter((v)=>{
      return(
        v.title.toLowerCase().includes(search.toLowerCase()) ||
        v.price.toString().includes(search.toString())
      )
    })


    if(seleactCat!==''){
      fdata=fdata.filter((v)=>v.category===seleactCat)
    }

   fdata= fdata.sort((a,b)=>{
      if(sort==='lh'){
        return a.price-b.price;
      }else if(sort==='hl'){
        return b.price-a.price;
      }else if(sort==='az'){
        return a.title.localeCompare(b.title)
      }else if(sort==='za'){
        return b.title.localeCompare(a.title)
      }
    })
  return fdata;
   
  }
  

  let fvdata=setSortSearch();

  return (
    <div className="row justify-content-between">
      
      {isLoading
        ? <ClipLoader
            className="spiner"
            loading={isLoading}
            // cssOverride={override}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />

        : 
        <>
        <input
          type="search"
          placeholder="Search Here"
          onChange={e =>IsSearch(e.target.value)}
        />

        <select onChange={(e)=>SetSort(e.target.value)}>
          <option value="0">--Select</option>
          <option value="lh">Low to High</option>
          <option value="hl">High to Low</option>
          <option value="az">A to Z</option>
          <option value="za">Z to A</option>
        </select>

        <>
        

        {
          buttonsearch.map((v)=>{
            return(
              <button style={{backgroundColor: seleactCat===v ? 'green' : ''}} onClick={()=>{setSelectCat(v,!seleactCat)}}   >{v}</button>
            ) 
          })
        }

</>
      {  fvdata.map(v => {
            console.log();
            return (
              <Card
                style={{
                  width: "18rem",
                  marginBottom:"2.0rem"
                }}
              >
                <img alt="Sample" src={v.image} style={{height : "200px"}} />
                <CardBody>
                  <CardTitle tag="h5">Card title</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {v.title}
                  </CardSubtitle>
                  <CardText style={{marginTop:"2.0rem"}}>
                    {v.price}
                  </CardText>
                  
                </CardBody>
              </Card>
            )}
          )}
          </>
          }
    </div>
  );
}

export default Searchdata;
