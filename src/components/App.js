
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const[name,setName] = useState("");
  const showName=(event)=>{
      setName(event.target.value);
  }
  return (
    <div>
        <label>Enter your name:</label>
        <input onChange={showName} type="text"></input>
        <p>Hello {name}!</p>
    </div>
  )
}

export default App
