import React from "react";
import { Link } from "react-router-dom";

import appLogo from "../assets/logo.png";   // logo par défaut (à adapter)

// A faire: ajouter une indication de la page où l'on se trouve

const Nav = () => {
    return (
        <nav>
            <div className="nav-left">
                <Link to="/">
                    <img src={ appLogo } alt="Starter App" height="20" />
                    Starter App
                </Link>
            </div>
            <ul className="nav-right">
                <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/page2">Page 2</Link>
                </li>
                <li className="nav-item">
                    <Link to="/page3">Page 3</Link>
                </li>
                <li className="nav-item">
                    <Link to="/page4">Page 4</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;