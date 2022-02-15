import "../styles.css"

const card = ({ name, symbol, id, handleDelete}) => {

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <button className="card-button" onClick={() => handleDelete(id)}>
                        <p className="title">Token name: {name}</p>
                        <p className="title">Symbol: {symbol}</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export { card };