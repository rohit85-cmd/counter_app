import React,{useState} from "react";
import  "./style.css"

const App = ()=>{

    let [score,setScore]=useState(0);



    return(
        <div>
            

            <h1>Hey! Welcome to Counter App</h1>
            <h3>The value of score is  <span> {score}</span> </h3>
            
            
            <button className = "button" onClick={()=> setScore(score+1)}> Increment </button>
            <button className = "button" onClick={()=>setScore(score-1)}> Decrement </button>
            <button className = "button" onClick={()=>{setScore(score=0)}}> Reset </button>
            
        </div>
    )
}

export default App;