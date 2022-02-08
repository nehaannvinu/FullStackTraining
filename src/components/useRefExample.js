import { useEffect, useRef, useState } from "react"

//1. UserRef to focus on some DOM by accessing current
//2. Store prev state

const UseRefExample = () => {

    const [random, setRandom] = useState(0);
    const [name, setName] = useState("")
    
    // useref to store previously generated random value
    const prevRandom = useRef("")
    //To access DOM input element
    const input1 = useRef("")

    //To reset and bring focus to input
    const resetInput = () => {
        setName("")
        input1.current.focus();
    }

    useEffect(() => {
        prevRandom.current = random
    }, [random])

    return (
        <div>
            <h3>Random Number: {random}</h3>
            <button onClick={() => setRandom(Math.ceil(Math.random() * 100))}>Generate Number</button>
            <h4>Previous value: {prevRandom.current}</h4>
            <hr />
            <input
                ref={input1}
                name={name}
                type="text"
                value={name}
                placeholder="Enter name"
                onChange={(e)=>setName(e.target.value)}
            />
            <button onClick={()=>resetInput()}>Reset</button>
            <h3>Hey {name}</h3>
        </div>
    )
}

export default UseRefExample;