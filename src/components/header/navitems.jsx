import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import "./navitem.css";
import {motion} from "framer-motion";
import {GrMenu, GrClose } from "react-icons/gr";

const NavItems = (props) => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () =>setSidebar(!sidebar);

    //Frame motion animation
    const animateFrom ={opacity: 0, y:-40};
    const animateTo ={opacity: 1, y:0};
    return(
        <>
        <div className="menu-icon" onClick={showSidebar}>
            {sidebar ? <GrClose style={{color: "red"}}/> : <GrMenu/> }
        </div>

        <nav>
            <motion.ul
            className={sidebar ? "nav-items active ": "nav-items"}
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.05}}
            onClick={showSidebar}
            >
            <NavLink to="/">Home </NavLink>
            <NavLink to="">About</NavLink>
            <NavLink to="">Projects</NavLink>
            <NavLink to="">Education</NavLink>
            <NavLink to="">Certifications</NavLink>
            <NavLink to="">Contact</NavLink>
            <NavLink to="#">
            <svg viewBox="0 0 100 80" width="40" height="40">
  <rect width="100" height="20" rx="10"></rect>
  <rect y="30" width="100" height="20" rx="10"></rect>
  <rect y="60" width="100" height="20" rx="10"></rect>
</svg>
                </NavLink>
                </motion.ul>
        </nav>
        </>
    );
};
export default NavItems;