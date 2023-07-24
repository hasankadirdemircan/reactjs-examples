import './App.css';
import { useState } from 'react';

function App() {
  const [age, setAge] = useState(0) //initialize value 0, setAge is a function that changes value of age

  const increaseAge = () => {
    setAge(age + 1);
  }

  return (
    <div className="App">
     {age} <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
}

export default App;
