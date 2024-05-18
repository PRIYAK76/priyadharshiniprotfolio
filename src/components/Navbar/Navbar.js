import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar.css"
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import Logo from "../../images/letter-p.png"

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    <div>
                        <img src={Logo} className="logo-image-navbar" />
                    </div>
                    <div className="menu-icon" onClick={handleShowNavbar}>
                        {showNavbar ? <MdClose /> : <RiMenu3Fill />}

                    </div>
                    <div className={`nav-elements  ${showNavbar && "active"}`}>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blogs">Blogs</NavLink>
                            </li>
                            <li>
                                <NavLink to="/projects">Projects</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
