import React from "react";
import { useState } from "react";
import { AddTask } from "./AddTask";

function Task() {
  // how can we get that data from input we use "onChange" event with using useState hook;
  const [query, setQuery] = useState("");
  //   i want to show list of items here;
  const [tasks, setTasks] = useState([]);

  const handleChange = (event) => {
    // console.log(event.target.value);
    // we find value here by destructring method;
    const { value } = event.target;
    // console.log(value);
    setQuery(value);
  };

  const handleAdd = () => {
    const payLoad = {
      title: query,
      status: false,
    };
    const newList = [...tasks, payLoad];
    setTasks(newList);
  };
  //   console.log(tasks);

  return (
    <div>
      <h1>Task</h1>
      <div>
        <input
          value={query}
          onChange={handleChange}
          placeholder="Add Something"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        {tasks.map((e,index) => {
          return <AddTask color={index %2 === 0 ? "green" : "red"} title={e.title} status={e.status} />;
          //in sbko hata kr hum esy bhi likh skty hai(<AddTask {...e} />) spred operator bhi pass kr 
        //   skty hai jab "key" aur "value" same  written ho tab (example=> title={e.title})
        })}
      </div>
    </div>
  );
}

// if we export above function by destructring method;
export { Task };
