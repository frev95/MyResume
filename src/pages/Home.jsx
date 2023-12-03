// ================ Page de présentation ================ //

import '../styles.css';
import React from 'react';
import Navigation from '../components/Navigation.jsx';
import Footer from '../components/Footer.jsx';
import photo from '../assets/profile.png';

function Home() {

  return (
    <>
      <Navigation page="1" />
      <main>
        <img className="thumbnail2 inlay-effect" src={photo} alt="photo" />
        
        <h1 className="question">Qui suis-je ?</h1>


        { /* contenu à compléter
        <img className="round inlay-effect"  src={photo} alt="photo" objectFit="cover" />
        <h1>Concepteur</h1>
        <h1>Développeur</h1>
        <h1>d'Applications</h1>
        
        <div className="job1"><h2>C</h2><h1>oncepteur</h1></div>
        <div className="job2"><h2>D</h2><h1>éveloppeur</h1></div>
        <div className="job3"><h1>d'</h1><h2>A</h2><h1>pplications</h1></div>
        <p className="job4"><h3>Développeur full-stack</h3></p>
        <div className="job4"><h3>avec une préférence</h3></div>
        <div className="job4"><h3>pour le back-end</h3></div> */ }
      </main>
      <Footer />
    </>
  );
}

export default Home;
