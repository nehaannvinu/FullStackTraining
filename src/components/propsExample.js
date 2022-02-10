const PropsExample = ({name, accountId, balance, ...optional}) => {
    
    return (
        <div>
            <h3>Props from parent component</h3>
            <p>Name : {name}</p>
            <p>Account Id: {accountId}</p>
            <p>Balance : {balance}</p>
            <p>Role :{optional.role}</p>
        </div>
    )
}

export default PropsExample;