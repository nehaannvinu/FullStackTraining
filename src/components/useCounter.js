import { useState } from "react";

export default function useCounter(initialValue) {
    const[value, setValue] = useState(initialValue)

    const increment = () => {
        return setValue((prevValue) => prevValue + 1)
    }

    const decrement = () => {
        return setValue((prevValue) => prevValue - 1)
    }

    const reset = () => {
        return setValue(initialValue)
    }

    return [value, increment, decrement, reset]
}