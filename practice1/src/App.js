import "./App.css";

// TODO: What is the difference between npm and NPX?
//       The Npm stands for Node Package Manager. Npm is a package installation tool.
//       Npx(node package execute) is a tool for executing packages.
//       NPX is a npm package runner whose job it is to execute a package from the registry without ever installing it.

function App() {
  const name = "saurabha"; // {} is called interpolation
  const age = 26;
  const skills = ["mern", "nodejs", "react", "github"];
  // yeha jo bhi array mai element hai hum usy comoponent maan k kr rahy hai .

  return (
    <div className="App">
      My name is {name} and age is {age}
      <div>you are {age > 18 ? "Elligable" : "Not eligable"} for licance</div>
      <div>{1 + (2 * 5) / 5}</div>
      {/* <ul>
        {skills.map(function(e) {
          return <li>skill:{e}</li>
        })}
      </ul> */}
      {/* here we are using custom component insted of directly write */}
      <Skill skill="Another param" />
      {/* in upper line skill="vs code" will not print because in component we already pass "param" as {value} not {skill} */}
      {/* it will work when you pass as an another param in component shows in components */}
      {skills.map(function (e) {
        return <Skill value={e} />; // here (key value pair ) also key is pass as parameter into component as an object
      })}
      <Skill value="Vs code" />
      {/* pass with same key name which passed in upper line code */}
      <Skill value2="Android" />
      {/* pass with different key name */}
      <MyFunction name="saurabha" age="26" />
      {/* yeha kitna bhi key value pair ho wo sab one object mai hi ho ge */}
    </div>
  );
}

// components

//1. method ( parameter should be in object and we can destructue it.example {value}(object distructring) ).
function Skill({ value, skill, value2 }) {
  // properties key=> {value}
  return (
    <p className="redColor">
      skill:{value} {skill} {value2}
    </p>
  );
}

// 2.(second method of passing properties(props))
function MyFunction(props) {
  console.log("my props", props.age + props.name);
  return (
    <p className="textGreen">
      name : {props.name} <br /> age : {props.age}
    </p>
  );
}

export default App;
