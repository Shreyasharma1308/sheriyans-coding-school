 import React, { useState } from "react";
 import Card from "./Components/Card";
 function App(){
  const[val,setVal]=useState(12);

  return (
    <div className="p-4">
     <h2>{val}</h2>
     <button onClick={()=>setVal((prev)=>prev+1)} className="px-4 py-1 bg-blue-400 text-white">change</button>
    </div>
  );
 }
 export default App; 