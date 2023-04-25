import React from "react";
import './Counter.css'
import { useDispatch, useSelector } from "react-redux";
import { Increment,Decrement } from "./counterAction";


function Counter(){
    const dispatch=useDispatch()
    const counter=useSelector(state=>state.counter)
    return(
        <div className="counter_app">
            <h1>Learning Redux</h1>
            <div className="counter">
            <button className="increment" onClick={()=>dispatch(Increment())}>Add Item</button> 
            <span>{counter}</span> 
            <button className="decrement" onClick={()=>dispatch(Decrement())}>Remove</button>
            </div>
        </div>
    )
}
export default Counter