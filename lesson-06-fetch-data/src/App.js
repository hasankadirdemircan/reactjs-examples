import './App.css';
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  /*fetch("https://catfact.ninja/fact")
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
      console.log(data.fact);
  });
*/
const [catFact, setCatFact] = useState("");

const fetchCatFact = () => {
  Axios.get("https://catfact.ninja/fact").then((response) => {
    setCatFact(response.data.fact);
  });
};

useEffect(() => {
  fetchCatFact();
}, [])

  return (
    <div className="App">
      <button onClick={fetchCatFact}> Generate Cat Fact</button>
      <p> {catFact}</p>
    </div>
  );
}

export default App;
