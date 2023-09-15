import React, { useEffect, useState } from "react";

function Quote(props) {
  const [isLoading, SetIsLoading] = useState(true);
  const [qData,setQdata]=useState([]);
  const [index,Setindex]=useState(0);

  const getData = async () => {
    const response = await fetch("https://type.fit/api/quotes");

    const data = await response.json();

    setQdata(data)
    SetIsLoading(false)
  };

  useEffect(() => {
    getData();
  }, []);

  const SetPrevious=()=>{
   const newIndex=index-1;

   Setindex(newIndex);


  }

  const SetNext=()=>{
   const newIndex=index+1;

   Setindex(newIndex);

  }
  return (
    <div>
      {
      isLoading ? <p>Loading...</p> : 
      <>
      <p>{qData[index].text}</p>
      <p>{qData[index].author}</p>
        <button onClick={SetPrevious} disabled={index===0 ? true : false}>Previous</button>
        <button onClick={SetNext} disabled={index===qData.length-1 ? true :false}>Next</button>
      </>
      }
    </div>
  );
}

export default Quote;
