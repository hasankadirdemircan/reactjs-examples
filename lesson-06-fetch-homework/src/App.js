import './App.css';
import Axios from "axios";
import { useState } from "react";

function App() {
  const [excuse, setExcuse] = useState("");

  const fetchExcuse = (excuseType) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuseType}/`)
    .then((response) => {
      console.log(response.data);
      console.log(response.data[0].excuse)
      setExcuse(response.data[0].excuse);
    
    });
  };

  return (
    <div className="App">
      <h1> Generate An Excuse</h1>
      <button onClick={() => fetchExcuse("party")}> Party </button>
      <button onClick={() => fetchExcuse("family")}> Family </button>
      <button onClick={() => fetchExcuse("office")}> Office </button>

      <p>{excuse}</p>
     
    </div>
  );
}

export default App;
