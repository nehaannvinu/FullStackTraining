import Card from "../components/card";
import Button from "../components/button";
import "../styles.css"

const AddToken = ({
    handleClick,
    handleDelete,
    handleTokenName,
    handleTokenSymbol,
    tokens,
    tokenName,
    tokenSymbol,
    flag }) => {

    return (
        <div>
            <div className="heading">
                <h3>Token Catalogue</h3>
            </div>
            <div className="textInputs">
                <label for="tokenname">Token Name</label>
                <label for="tokensymbol" className="symbolHeading">Token Symbol</label> <br />
                <input id="tokenname" label="Token Name" placeholder="Eg:NAV Coin" onChange={handleTokenName} type="text" value={tokenName} />
                <input id="tokensymbol" placeholder="Eg:NAV" onChange={handleTokenSymbol} type="text" value={tokenSymbol} />
                <Button handleClick={handleClick} />
            </div>
            <div className="cardcomponent">
                {flag ? tokens.map((token) => <Card name={token.name} symbol={token.symbol} id={token.id} handleDelete={handleDelete} />) : " "}
            </div>
        </div>
    )
}

export default AddToken