import useCounter from "./useCounter"

const CustomHooks = () => {

    const [count, increment, decrement, reset] = useCounter(0)

    return (
        <div>
            <h2>Counter</h2>
            {count}
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default CustomHooks