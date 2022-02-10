import { useState } from "react"

const UpdateObject = () => {

    const [object, setObject] = useState({
        name: "Neha",
        age: "21"
    })

    const updateObject = () => {
        return setObject({ ...object, name: "Ann", age: 22 })
    }

    return (
        <div>
            <hr />
            <div>
                Name: {object.name}<br />
                Age: {object.age}
                <br />
                <button onClick={updateObject}>Update Details</button>

            </div>
        </div>
    )
}

export default UpdateObject