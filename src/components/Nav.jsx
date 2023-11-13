import React from "react";
import { Link } from "react-router-dom";

import appLogo from "../assets/logo.png";

// A faire: ajouter une indication de la page où l'on se trouve

const Nav = () => {
    return (
        <nav>
            <Link to="/">
                <img src={ appLogo } alt="" width="150" />
                Nom de l'appli
            </Link>
            <ul className="nav">
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