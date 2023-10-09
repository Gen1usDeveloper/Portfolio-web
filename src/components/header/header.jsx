import {NavLink} from "react-router-dom";
import Nav from "./nav";
import Logo from "../../images/abc.png";
import "./header.css";

const Header =()=> {
    return (
        <div className="header">
            <div className="header-wrapper global-max-width">
                <div className="image-wrapper">
                    <NavLink to ="/">
                        {<img className="logo-img" src={Logo} alt="Protfolio Logo"/>}
                    </NavLink>
                </div>
                <Nav />
            </div>
        </div>
    );
};
export default Header;