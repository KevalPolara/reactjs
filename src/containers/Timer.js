import React, { Component } from 'react';

class Timer extends Component {

    // 1 Value ne Initalise Kare
    constructor(props) {
        super(props);
        this.state={
            time:new Date()
        }
    }

    tick=()=>{
        console.log("tick");
        this.setState({
            time:new Date()
        })
    }

    // 3 Server ma request Mokle and Server mathi Data Lavavanu kam Kare

    componentDidMount=()=>{
        console.log("componentDidMount");
      this.Timer=  setInterval(()=>this.tick(),1000);
    }

    // 5 Data ne update kare
    
    componentDidUpdate=(prevProps,prevState)=>{
        console.log("componentDidUpdate");

        if(this.state.time !== prevState.time){
            console.log("update");
        }
    }

    // 6 Date ne relase kare jyare new page par jaye tyare
    componentWillUnmount=()=>{
        console.log("componentWillUnmount");
        clearInterval(this.Timer)

    }
    
    // 2:-Value ne DisplayOut Kare:-
     //4:- Value ne 
    render() {
        return (
            <>
                <h1>{this.state.time.toLocaleTimeString()}</h1>
            </>
        );
    }
}

export default Timer;