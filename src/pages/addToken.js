import { useState } from "react";
import Card from "../components/card";

const AddToken = () => {
    const [tokenName, setTokenName] = useState("");
    const [tokenSymbol, setTokenSymbol] = useState("")
    const [flag, setflag] = useState(false)
    const [tokens, setTokens] = useState([{
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
        setflag(true)
        setTokens([...tokens, { name: tokenName, symbol: tokenSymbol }])
        console.log(tokens)
        setTokenName("");
        setTokenSymbol("")
    }

    return (
        <div>

            <div className="heading">
                <h3>Token Catalogue</h3>
            </div>
            <div>
                <input id="tokenname" placeholder="Eg:NAV Coin" onChange={handleTokenName} type="text" value={tokenName} />
                <input id="tokensymbol" placeholder="Eg:NAV" onChange={handleTokenSymbol} type="text" value={tokenSymbol} />
                <button type="button" onClick={handleClick} class="btn btn-success" >ADD</button>
            </div>
            <div className="classcomponent">
                {flag ? <Card tokens={tokens} /> : " "}
            </div>
        </div>
    )
}

export default AddToken