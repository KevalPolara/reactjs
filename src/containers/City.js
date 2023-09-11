import React , { Component } from  "react";


class City extends Component{
   render(){
    return(
        <div>
            <h1>City Name:{this.props.country=== "Bharat" ? "Surat" :"London"}</h1>
       </div>
    )
   }    
}

export default City;