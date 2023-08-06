import './App.css';
import { Person } from "./components/Person";

function App() {
  return (
    <div className="App">
        <Person
          name="Hasan"
          email="hasan@gmail.com"
          age={21}
          isMarried={true}
          friends={["jessica", "jake", "jerry", "jasmine"]}
           />
    </div>
  );
}

export default App;
