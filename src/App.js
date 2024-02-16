import { useState } from "react";
import BtnComponent from "./BtnComponent";
import DisplayComponent from "./DisplayComponent";
import "./main-section.css"
function App() {
   const [time, setTime] = useState({ms:0, s: 0, m:0, h:0});
   //sachin
   const [interv, setInterv] = useState()
   const [status, setStatus] = useState(0)
   const start = () =>{
     run() 
     setStatus(1)
     setInterv(setInterval(run, 10))
    
   }
   
   var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;
   const run = () =>{
    if(updatedM === 60){
      updatedH++
      updatedM = 0
    }
    if(updatedS === 60){
      updatedM++
      updatedS = 0
    }
    if(updatedMs === 100){
      updatedS++
      updatedMs = 0
    }
   updatedMs++
   return setTime({ms:updatedMs, s: updatedS, m:updatedM, h:updatedH})
   }
   const stop = () =>{
    run() 
    clearInterval(interv)
    setStatus(2)
  }
  const reset = () =>{
   
    clearInterval(interv)
    setStatus(0)
    setTime({ms:0, s: 0, m:0, h:0})
  }
  const resume = () =>start();
  return (
    <div className="main-section">
      <div className="clock">
        <div className="stopwatch">
      <DisplayComponent  time = {time}/>
      <BtnComponent status ={status} start = {start} stop = {stop} resume = {resume} reset = {reset}/>

      </div>

      </div>
    </div>
  );
}

export default App;
