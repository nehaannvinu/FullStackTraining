const PropsExample = (props) => {
    
    return (
        <div>
            <h3>Props from parent component</h3>
            <p>Name 1: {props.names.name1}</p>
            <p>Name 2: {props.names.name2}</p>
        </div>
    )
}

export default PropsExample;