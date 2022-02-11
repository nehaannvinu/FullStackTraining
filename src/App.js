import React, { useState } from "react";

function App() {
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("")
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

    setTokens((prevItems) => {
      return {
        ...prevItems,
        name: tokenName,
        symbol: tokenSymbol
      };
    });
    console.log(tokens)
    setTokenName("");
    setTokenSymbol("")
  }

  return (
    <div className="container">
      <div className="heading">
        <h3>Card Catalogue</h3>
      </div>
      <div>
        <input name="tokenname" onChange={handleTokenName} type="text" value={tokenName} />
        <input name="tokensymbol" onChange={handleTokenSymbol} type="text" value={tokenSymbol} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      {/* <div class="card">
        <div class="card-body">
          <ul>
            {tokens.map((token) => {
              return <p>{token}</p>;
            })}
          </ul>
        </div>
      </div> */}
    </div>
  );
}

export default App;
