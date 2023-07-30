
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { Navbar } from "./Navbar";


function App() {
  const [username, setUsername] = useState("Kadir"); 
  return (
    <div className="App">
   
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home username={username}/>} />
            <Route path="/profile" element={<Profile username={username} setUsername={setUsername}/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
          </Routes>
        </Router>

    </div>
  );
}

export default App;



const TopComponent = () => {
  const [state, setState] = useState();
  return(
    <div>
      <MiddleComponent state = {state} />
    </div>
  );
};

const MiddleComponent = (state) => {
  return (
    <div>
      <BottomComponent state = {state} />
    </div>
  );
};

const BottomComponent = (state) => {
  return <div> {state}</div>;
};