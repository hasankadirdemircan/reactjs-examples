import './App.css';
import {User} from './User'

function App() {
  const users = [
    { name: "Kadir", age: 21},
    { name: "hasan", age: 22},
    { name: "demircan", age: 23},
  ];

  return (
    <div className="App">
      {users.map((user, key) => {
        return (
        <User name={user.name} age={user.age}/>
        );
      }
      )}
    </div>
  );
}



export default App;
