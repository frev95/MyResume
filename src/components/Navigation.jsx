// ================ Barre de navigation ================ //

import '../styles.css';
import React from "react";
import { Link } from "react-router-dom";

import photo from "../assets/profile.png";   // photo du profil

const Navigation = ({ page }) => {  // la prop page applique à la page courante la classe CSS .current
    return (
        <nav>
            <Link to="/">
                { page==1 ? <div className="initials">FR</div> :
                            <img className="thumbnail inlay-effect" src={photo} alt="photo" /> }
            </Link>
            <Link to="/competences">
                <div className={page==2 ? "nav current" : "nav item"}>Compétences</div>
            </Link>
            <Link to="/portfolio">
                <div className={page==3 ? "nav current" : "nav item"}>Portfolio</div>
            </Link>
            <Link to="/contact">
                <div className={page==4 ? "nav current" : "nav item"}>Contact</div>
            </Link>
        </nav>
    );
}

export default Navigation;
