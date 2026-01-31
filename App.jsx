import "./box.css";
import { useState} from "react";

function App() {
  const[color , setColor] = useState("gray")

  return (
    <>
     
    <h1>Color picker in react</h1>
      <div style={{
        height:"200px",
        width:"200px",
        border:"2px soild black",
        background: color

      }}></div>
      <button onClick={()=>setColor("red")}>red</button>
      <button onClick={()=>setColor("black")}> black</button>
    </>
  )
}

export default App
