import { Link } from "react-router-dom";

const Navbar = ()=>{

    return(
        <div>
            <div className="links">
                <Link to="/" >Home</Link> <br/>
                <Link to="/album">Album</Link> 
            </div>
        </div>
    )

}

export default Navbar;