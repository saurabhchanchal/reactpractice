import "./App.css";
import { Category } from "./components/Category";

function App() {
  const navbar = [
    {
      image:
        "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/47e5c31ef7dcce1e.png?q=100",
      title: "Top Offers",
    },
    {
      image:
        "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/361d53b8725c2d2d.png?q=100",
      title: "Electronics",
    },
  ];

  return (
    <div className="App">
      {navbar.map((e) => (
        <Category {...e} />
      ))}
    </div>
  );
  // {<Category  image={e.image} title={e.image}/>} we can also write.
}

export default App;
