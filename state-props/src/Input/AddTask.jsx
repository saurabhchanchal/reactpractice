import React from "react";
// import { useState } from "react";

function AddTask({ title, status,color }) {
  // console.log(props) esky a lawa hum destructuring method sai bhi kr skty hai hum "title" aur "status" direct
  // bula skty hai

  // const [tasks, setTasks] = useState([]);
  return (
    <div>
      <h3 style={{color}}>{`${title}= ${status}`} </h3>
      {/* <h3>{`${props.title}-${props.status}`} </h3> this will work same as above code */}
    </div>
  );
}

export { AddTask };
// props are read only.
// props can't supposed to modify.
