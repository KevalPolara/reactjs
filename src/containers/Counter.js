import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state={
            Count:0
        }
    }

    increment=()=>{
        if(this.state.Count<5){
            this.setState({
            Count:this.state.Count+1           
            }) 
        }
        
    }

    decrement=()=>{
        if(this.state.Count>0){
            this.setState({
                Count:this.state.Count-1
            })
        }
        
    }
    render() {
        return (
            <div>
               <h1>Counter</h1>
               <button onClick={this.increment}>+</button> 
                <br></br>
                <br></br>
                <p>{this.state.Count}</p>
               <button onClick={this.decrement}>-</button> 
            </div>
        );
    }
}

export default Counter;