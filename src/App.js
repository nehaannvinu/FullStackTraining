import './App.css';
import UseStateExample from './components/useStateExample';
import PropsExample from './components/propsExample';
import ClassComponent from './components/classComponent';
import {useState } from 'react'

function App() {

  const [flag, setFlag] = useState(false);

  const names = {
    name1: "Neha",
    name2: "Megha"
  }

  return(
    <div className="App">
      <UseStateExample />
      {/* Passing names as props to child component */}
      <PropsExample names={names}/>
      <div>
        <hr/>
      </div>
      <button onClick={()=> setFlag(!flag)}>Time</button>
      <div>
        {flag? <ClassComponent/>:" "}
      </div>
    </div>
  )
}

export default App;
