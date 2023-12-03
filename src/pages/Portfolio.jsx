// ================ Portfolio ================ //

import '../styles.css';
import React from 'react';
import Navigation from '../components/Navigation.jsx';
import Selector from '../components/Selector.jsx';
import Footer from '../components/Footer.jsx';

function Portfolio() {

  return (
    <>
      <Navigation page="3" />
      <main>
        <h1>Portfolio</h1>    { /* contenu à modifier: ajouter <Selector table={filters} />
                                                       table contient les IDs des technos utilisées comme argument de filtrage des projets
                                                       ce filtrage se fera en regardant si l'ID sélectionné se trouve dans la liste des technos du projet */ }
      </main>
      <Footer />
    </>
  );
}

export default Portfolio;
