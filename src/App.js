import AddToken from "./pages/addToken";
import {Button} from "./components/button";
import { useState } from "react";
import { card } from "./components/card";

function App(props) {

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
    <div className="App">
      <AddToken
        handleDelete={handleDelete}
        handleClick={handleClick}
        handleTokenName={handleTokenName}
        handleTokenSymbol={handleTokenSymbol}
        tokens={tokens}
        tokenName={tokenName}
        tokenSymbol={tokenSymbol}
        tokenId={tokenId}
        flag={flag}
        card={card}
      >
        <Button handleClick={handleClick}>
          Add
        </Button>
      </AddToken>
    </div>
  );
}

export default App;
