import React, { useEffect, useState } from 'react';

function TimerFun(props) {
    // 1
    const [time,setTime]=useState(new Date());

    const tick=()=>{
        console.log("tick");
        setTime(new Date())
    }

    useEffect(()=>{
        // 3:- ComponentDidMount, // 5:-ComponentDidUpdate

      const timer=setInterval(() => {
            tick()
            console.log("ComponentDidMount,ComponentDidUpdate");
        }, 1000);
        // 6.
    return() => {
        console.log("ComponentWillamout")
        clearInterval(timer)
    
}
    },[time])

    

    // 2  //4
    return (
        <div>
            <h2>{time.toLocaleTimeString()}</h2>
            
        </div>
    );
}

export default TimerFun;