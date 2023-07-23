import "./App.css"

function App() {
  const name = "kadir";
  const name2 = <h1>hasan</h1>
  const age = <h2>21</h2>
  const email = <h2>dfsdffdf@com</h2>
  const user = (
      <div>
        {name}
        {age}
        {email}
      </div>
  );
  return (
    <div className="App">
      <h1>{name}</h1>
      {name2}
      {age}
      {user}
     <User name="hasann" age={28} email="dfsdf@com"/>
    </div>
  );
}

const GetName = () => {
    return "kadir";
}

const GetNameComponent = () => { //component should start capital letter
  return <h1>kadir</h1>
}
/*
const props = {
  name: "hasann",
  age: 28,
  email: "dfdsf@com"
}
*/
const User = (props) => {
  return (
    <div>
          <h1>{props.name}</h1>
          <h2>{props.age}</h2>
          <h2>demircan@com</h2>
    </div>
  )
}

export default App;

