import { Link } from "react-router-dom";
import { home, album } from "../constants/routes"

const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to={home} >Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={album}>My Album</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )

}

export default Navbar;