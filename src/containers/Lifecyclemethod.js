import React, { Component } from 'react';

class Lifecyclemethod extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:"keval"
        }
    }
    // without setstate method Update thay gyu
    // The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.
    static getDerivedStateFromProps(props,state){
        return{
            name:props.Defaultname
        }
    }
    
    // React ni under three phases hoy che:-
    // 1)Mounting 2)Updating 3)Unmounting

    // 1)Mounting:- First time kak Load thay che to Mounting,Components Banvanu Start thay che
    // Mounting means putting elements into the DOM.
    // 2)Updating :- Kak Update Karvu Che to Updating
    // 3)UnMounting :- Kok Components Remove Karvu che to Unmounting

    // Mounting ni under Four method:-

    // 1)Constructor()
    // 2)getDerivedStateFromProps()
    // 3)render()
    // 4)componentDidMount()
    // After the Component is render

    // pela render method call thay pachi componentDidMount method call thay

    // Updating ni Under Five Method Ave:-
    // 1)getDerivedStateFromProps()
    // 2)shouldComponentUpdate()
    // Return Boolean Value
    // 3)render()
    // 4)getSnapshotBeforeUpdate()
    // 5)ComponentDidUpdate()

    // Unmounting Under ek Method Ave:-
    // 1)ComponentWillUnamount()


    componentDidMount(){
        console.log("First Time Load thay tyare");
    }

    render() {
        return (
            <div>
                <h1>Hello React</h1> 
                <p>My Name is {this.state.name}</p>
            </div>
        );
    }
}

export default Lifecyclemethod;