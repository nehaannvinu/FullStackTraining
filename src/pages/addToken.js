import { useState } from "react";
import Card from "../components/card";
import Button from "../components/button";
import "../styles.css"

const AddToken = ({ button }) => {
    const [tokenName, setTokenName] = useState("");
    const [tokenSymbol, setTokenSymbol] = useState("")
    const [tokenId, setTokenId] = useState(1)
    const [flag, setflag] = useState(false)
    const [tokens, setTokens] = useState([{
        id: "",
        name: "",
        symbol: ""
    }]);

    let newToken = "";
    let newSymbol = "";

    function handleTokenName(event) {
        newToken = event.target.value;
        setTokenName(newToken);
    }

    function handleTokenSymbol(event) {
        newSymbol = event.target.value;
        setTokenSymbol(newSymbol);
    }

    function handleClick() {
        setTokenId(tokenId + 1)
        if (flag === false) {
            setflag(true)
            setTokens([{ name: tokenName, symbol: tokenSymbol, id: tokenId }])
        }
        else {

            setTokens([...tokens, { name: tokenName, symbol: tokenSymbol, id: tokenId }])
        }
        console.log(tokens)
        setTokenName("")
        setTokenSymbol("")
    }

    function handleDelete(id) {
        console.log("Delete function called to delete" + id)
        const removeItem = tokens.filter((token) => {
            return token.id !== id;
        });
        setTokens(removeItem);
    }

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
            <div>
                {button}
            </div>
        </div>
    )
}

export default AddToken