import { useState } from 'react'

const UseStateExample = () => {
    const [name, setName] = useState("Neha");
    const [thename, settheName] = useState("")
    const [count, setCount] = useState(0);
    const [names, setNames] = useState([]);

    const changeName = () => {
        if (name==="Neha")
        return setName("Megha")
        else 
        return setName("Neha")
    }

    const increase = () => {
        setCount((prevState) => prevState + 1);
    }

    const decrease = () => {
        return setCount(count - 1);
    }

    const addName = (e) => {
        e.preventDefault()
        setNames([...names, { id: names.length, thename }])
        settheName("")
        console.log(names);
    }


    const setTheName = (n) =>{
        return settheName(n)
    }
    return (
        <div className="useStateExample">
            <h1>State Change of String</h1>
            <div>Hello {name}</div>
            <button onClick={changeName}>CLICK ME!</button>
            <hr></hr>
            <h1>State Change of Number</h1>
            <div>{count}</div>
            <button onClick={increase}>+</button> <button onClick={decrease}>-</button>
            <hr></hr>
            <h1>State Change of Array</h1>
            <form onSubmit={addName}>
                <input value={thename} placeholder="Add name" onChange={ (e) => {setTheName(e.target.value)} } />
                <button type="submit">Submit</button>
            </form>
            <br />
            <div>
                <ul>
                    {names.map((name) => (
                        <li> {name.thename}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}


export default UseStateExample;