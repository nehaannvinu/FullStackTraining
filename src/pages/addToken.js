import "../styles.css"

const AddToken = ({
    handleDelete,
    handleTokenName,
    handleTokenSymbol,
    tokens,
    tokenName,
    tokenSymbol,
    flag,
    children,
    card
}) => {

    return (
        <div>
            <div className="heading">
                <h3>Token Catalogue</h3>
            </div>
            <div className="textInputs">
                <label htmlFor="tokenname">Token Name</label>
                <label htmlFor="tokensymbol" className="symbolHeading">Token Symbol</label> <br />
                <input id="tokenname" label="Token Name" placeholder="Eg:NAV Coin" onChange={handleTokenName} type="text" value={tokenName} />
                <input id="tokensymbol" placeholder="Eg:NAV" onChange={handleTokenSymbol} type="text" value={tokenSymbol} />
                {children}
            </div>
            <div className="cardcomponent">
                {flag ? tokens.map((token) => card({...token, handleDelete})) : " "}
            </div>
        </div>
    )
}

export default AddToken