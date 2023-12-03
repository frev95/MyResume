// ================ Sélecteur (équivalent d'un groupe de boutons radio) ================ //

import '../styles.css';
import React from 'react';
import { getTechnoName } from '../functions/GetTechnoName';

const Selector = ({ filters, currentID, setCurrentID }) => {

    // PRINCIPE: le bouton sur lequel on clique 1) devient le bouton courant
    //                                          2) change le filtrage des projects
    
    return (
        <div className="select">
            <div key={0}
                className={currentID==0 ? "sel current" : "sel item"}
                onClick={() => setCurrentID(0)}>
                Tous les projets
            </div>
            { filters.map((id) => (
                <div key={id}
                    className={currentID==id ? "sel current" : "sel item"}
                    onClick={() => setCurrentID(id)}>
                    { getTechnoName(id) }
                </div>
            ))}
        </div>
    );
}

export default Selector;
