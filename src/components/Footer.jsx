// ================ Pied-de-page ================ //

import '../styles.css';
import React from "react";

const Footer = () => {
    return (
        <footer>
            <div>
                <span className="coords">François Réveillon</span>
                <span className="coords"><i className="fas fa-envelope"></i>{" "}adresse@domaine.fr</span>
                <span className="coords"><i className="fas fa-phone"></i>{" "}01.23.45.67.89</span>
            </div>
            <div className="rights">©2023 Tous droits réservés</div>
        </footer>
    );
}

export default Footer;
