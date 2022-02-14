import "../styles.css"

const Card = ({ name, symbol, id, handleDelete}) => {

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <button className="card-button" onClick={()=>handleDelete(id)}>
                        <p>Id: {id}</p>
                        <p className="title">Token name: {name}</p>
                        <p className="title">Symbol : {symbol}</p>
                        {/* <button onClick={()=>handleDelete(id)}>DELETE</button> */}
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Card;