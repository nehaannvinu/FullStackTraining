import './App.css';
import UseStateExample from './components/useStateExample';
import PropsExample from './components/propsExample';
import ClassComponent from './components/classComponent';
import FunctionalComponent from './components/functionalComponent';
import UseRefExample from './components/useRefExample';
import CustomHooks from './components/customHook';
import UpdateObject from './components/updateObjectExample';
import { useState } from 'react'

function App() {

  const [flag, setFlag] = useState(false);

  const userDetails = {
    name:"Neha",
    role:"Employee",
    accountId:2109028003,
    balance:213,
    isAdmin: true,
  }

  return (
    <div className="App">
      <UseStateExample />
      {/* Passing names as props to child component */}
      <PropsExample  {...userDetails}/>
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
      <UpdateObject/>
    </div>
  )
}

export default App;
