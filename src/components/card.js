import "../styles.css"

const Card = ({ name, symbol }) => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <>
                        <p className="title">Token name: {name}</p>
                        <p className="title">Symbol : {symbol}</p>
                    </>
                </div>
            </div>
        </div>

    )
}

export default Card;