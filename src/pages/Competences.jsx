// ================ Compétences et expériences ================ //

import React from 'react';
import Navigation from '../components/Navigation.jsx';
import ScoreBar from '../components/ScoreBar.jsx';
import Footer from '../components/Footer.jsx';
import { technos } from '../data.js';
import '../styles.css';

function Competences() {

    return (
        <>
            <Navigation page="2" />
            <main>
                <div className='vflex'>
                    <div className='hflex'>
                        { technos.map((item) => (<ScoreBar item={ item } />))}
                    </div>
                    <div className='hflex'>
                    </div>
                    <div className='hflex'>
                    </div>
                    <div className='hflex'>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Competences;
