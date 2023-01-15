import { useState } from "react";
// import React from "react";
import "./App.css";
import Counter from "./Counter/Counter";
import { Task } from "./Input/Task"; // discture import

function App() {
  // react.useState function return an array of two items first is inital value and second is the function that update the value.

// The "destructuring assignment" syntax is a JavaScript expression that makes it possible to unpack values from arrays, 
//  or properties from objects, into distinct variables.

  const [counter, setCounter] = useState(5); // destructuring

  // component
  function handleIncrement(value) {
    return setCounter(counter + value);
  }

  const handleDecrement = function (value) {
    setCounter(counter - value);
  };

  console.log("update",counter);

  return (
    <div className="App">
      <h1>Counter</h1>
      <p>{counter}</p>
      <button
        onClick={function () {
          handleIncrement(1);
        }}
      >
        Increase
      </button>
      {/* <button onClick={handleDecrement(-1)}>Decrease</button>   we can't use only argument it given*/}
      {/* Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop. so */}
      <button onClick={() => handleDecrement(1)}>Decrease</button>
      {/* import component  */}
      <Counter />
      <Task />
    </div>
  );
}

export default App;
// TODO:
// Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop .
// this may be due to serval reasons.
//1. Changing the "state" in the main body of the component.
//2. "Invoking" an event handler, instead of passing as a function.
//  goes to this link and know why and how can we handle it.
// https://www.datainfinities.com/20/too-many-re-renders-react-limits-the-number-of-renders-to-prevent-an-infinite-loop#:~:text=The%20React%20error%20%22Too%20many,of%20passing%20as%20a%20function.


// state is something that the component remember.