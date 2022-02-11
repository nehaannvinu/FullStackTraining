const Card = ({tokens}) => {
    return (
        <div class="card">
            <div class="card-body">
                <>
                    {tokens.map(({ name, symbol }) => (
                        <p key={name}> Token name is {name} with symbol {symbol}</p>
                    ))}
                </>
            </div>
        </div>
    )
}

export default Card;