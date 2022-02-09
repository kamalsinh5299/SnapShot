import React from "react";
import './ManImageSearch.css';
export default function ManImageSearch(props){
    return(
        <div className="container" >
        <button onClick={(e)=>props.Handel("mountain")}>Mountain</button>
        <button onClick={(e)=>props.Handel("dog")}>Dog</button>
        <button onClick={(e)=>props.Handel("food")}>Food</button>
        <button onClick={(e)=>props.Handel("city")}>City</button>
        </div>
    );
}