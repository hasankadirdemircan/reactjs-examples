import React from 'react';
import './App.css';
import { Person, Country } from "./component/Person";

function App() {

  const getAge = (name: string): number => {
    return 99;
  }

  return (
    <div className="App">
      <Person
          name="Hasan"
          email="hasan@gmail.com"
          age={21}
          isMarried={true}
          friends={["jessica", "jake", "jerry", "jasmine"]}
          country={Country.Canada}
        />
    </div>
  );
}

export default App;
