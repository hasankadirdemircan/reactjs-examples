import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './folder/Home';
import { Menu } from './folder/Menu';
import { Contact } from './folder/Contact';
import { NavBar } from './NavBar';

function App() {
  return (
    <div className="App">
        
        <Router>
          <NavBar />
          <Routes>

            <Route path="/"  element={<Home />}/>
            <Route path="/menu"  element={<Menu />}/>
            <Route path="/contact"  element={<Contact />}/>
            <Route path="*" element={<h1> PAGE NOT FOUND </h1>} />
          </Routes>
        </Router>

    </div>
  );
}

export default App;
