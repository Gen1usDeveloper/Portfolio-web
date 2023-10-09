//import {NavLink} from "react-router-dom";
import Nav from "./nav";
//import Logo from "../../images/abc.png";
import "./header.css";

const Header =()=> {
    return (
        <div className="header">
            <div className="header-wrapper global-max-width">
                <div className="image-wrapper">
                        <h4>Portfolio</h4>
                </div>
                <Nav />
            </div>
        </div>
    );
};
export default Header;