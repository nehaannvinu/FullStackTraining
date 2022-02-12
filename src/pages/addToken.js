import { useState } from "react";
import Card from "../components/card";
import Button from "../components/button";
import "../styles.css"

const AddToken = () => {
    const [tokenName, setTokenName] = useState("");
    const [tokenSymbol, setTokenSymbol] = useState("")
    const [flag, setflag] = useState(false)
    const [tokens, setTokens] = useState([{
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
        if (flag === false) {
            setflag(true)
            setTokens([{ name: tokenName, symbol: tokenSymbol }])
        }
        else {
            setTokens([...tokens, { name: tokenName, symbol: tokenSymbol }])
        }
        console.log(tokens)
        setTokenName("");
        setTokenSymbol("")
    }

    return (
        <div>
            <div className="heading">
                <h3>Token Catalogue</h3>
            </div>
            <div className="textInputs">
                <input id="tokenname" placeholder="Eg:NAV Coin" onChange={handleTokenName} type="text" value={tokenName} />
                <input id="tokensymbol" placeholder="Eg:NAV" onChange={handleTokenSymbol} type="text" value={tokenSymbol} />
                <Button handleClick={handleClick} />
            </div>
            <div className="cardcomponent">
                {flag ? tokens.map((token) => <Card name={token.name} symbol={token.symbol} />) : " "}
            </div>
        </div>
    )
}

export default AddToken