import { useState } from "react";
import React from "react";

function Counter() {
    const [counter, setCounter] = useState(10);

    const handleReducer = ()=> {
        setCounter(counter-1);
    }
    return (
        <div>
             <h1>Counter1</h1>
             <p>{counter}</p>
             <button onClick={()=> setCounter(counter+1)}>Add</button>
             <button onClick={function() {handleReducer()}}>Reduce</button>
        </div>
    )
}

export default Counter;

// import React from 'react'

// const Counter = () => {
//   return (
//     <div>Counter</div>
//   )
// }

// export default Counter
