import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar.css"
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import Logo from "../../images/p-logo-white.jpg"

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
                        <NavLink to="/"> <img src={Logo} className="logo-image-navbar" alt='logo-pigc-navbar' /></NavLink>
                    </div>
                    <div className="menu-icon" onClick={handleShowNavbar}>
                        {showNavbar ? <MdClose size={24} /> : <RiMenu3Fill size={24} />}

                    </div>
                    <div className={`nav-elements  ${showNavbar && "active"}`}>
                        <ul>
                            <li>
                                <NavLink to="/About">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Experience">Experience</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Projects">Projects</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Contact">Contact</NavLink>
                            </li>
                            <li>
                                <button className='resume-btn-navbar'> <NavLink to="/Res">Resume</NavLink></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
