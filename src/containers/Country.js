import React, { Component } from 'react';
import City from './City';

class Country extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            countryName:'UK'
        }
    }

    changeCountry=()=>{
        this.setState(
            {
                countryName:'Bharat'  
            }
        )
    }
     
    render() {
        return (
            <div>
                <h1>Hello React Component</h1>
                <h2>Our Country is:{this.state.countryName}</h2>

                <button onClick={this.changeCountry}>changeCountry</button>
                <City country={this.state.countryName}/>
            </div>
        );
    }
}


export default Country;