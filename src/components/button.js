import "../styles.css"

export const Button = ({ handleClick, children }) => <button onClick={handleClick} type="button" className="btn btn-success" >{children}</button>