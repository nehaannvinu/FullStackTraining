import { useEffect, useState } from "react"

const FunctionalComponent = () => {
    const [time, setTime] = useState(new Date().toString())

    useEffect(() => {
        console.log("Component Mounted or updated")
    },[])

    const changeTime = () => {
        setTime(new Date().toString())
    }

    return (
        <div>
            <h3>Time</h3>
            <div>{time}</div>
            <button onClick={() => changeTime()}>Update Time</button>
        </div>
    )
}

export default FunctionalComponent;