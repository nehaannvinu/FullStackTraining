import "../styles.css"

const Card = ({tokens}) => {
    return (
        <div className="card">
            <div className="card-body">
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