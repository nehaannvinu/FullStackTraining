import './App.css';
import UseStateExample from './components/useStateExample';
import PropsExample from './components/propsExample';
import ClassComponent from './components/classComponent';
import FunctionalComponent from './components/functionalComponent';
import UseRefExample from './components/useRefExample';
import CustomHooks from './components/customHook';
import { useState } from 'react'

function App() {

  const [flag, setFlag] = useState(false);

  const names = {
    name1: "Neha",
    name2: "Megha"
  }

  return (
    <div className="App">
      <UseStateExample />
      {/* Passing names as props to child component */}
      <PropsExample names={names} />
      <hr />
      <button onClick={() => setFlag(!flag)}>Show Current Time</button>
      <div className="classcomponent">
        {flag ? <ClassComponent /> : " "}
      </div>
      <hr />
      <div className="functionalComponent">
        <FunctionalComponent />
      </div>
      <hr />
      <div className="useRefExample">
        <UseRefExample />
      <hr />
      </div>
      <CustomHooks />
    </div>
  )
}

export default App;
