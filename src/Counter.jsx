import { useState } from "react"

export const Counter = ({storeValues,index}) => {
   const [counter,setCounter] = useState(0)

  const handleClick = () => {
      setCounter(counter+1)

  }
  const handleClick2 = () => {
      if(counter>0){
        setCounter(counter-1)
      }
   
}

 const storeValue = () => {
    storeValues(counter+1,index)
 }
  
  

    return (<div  onClick={storeValue}>
        <button onClick={handleClick}>increment</button>
       {counter}
       <button onClick={handleClick2}>
        decrement
       </button>
       
    </div>)
}