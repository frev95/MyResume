import React, { useState, useEffect } from 'react';
import '../styles.css';

const ScoreBar = ({ item }) => {
    const getRgbComponents = (color) => {
        // suppression des caractères autres que les nombres et les virgules utilisées comme séparateur
        const string = color.replace('rgb(', '').replace(' ', '').replace(')', '');
        // séparation des composantes RGB (sous la forme de chaînes de caractères)
        const components = string.split(',');
        // conversion en entiers
        return [parseInt(components[0]), parseInt(components[1]), parseInt(components[2])];
    };
      
    const getGradientColors = (colorStops) => {    // génération du dégradé spécifié par colorStops (le dernier stop précise le nombre total de cellules)
        const gradientColors = [];
        
        for (let i = 0; i < colorStops.length - 1; i++) {
            const startPosition = colorStops[i].position;
            const endPosition = colorStops[i + 1].position;
            const startRgb = getRgbComponents(colorStops[i].rgb);
            const endRgb = getRgbComponents(colorStops[i + 1].rgb);

            // interpolation de startRgb (incluse) vers endRgb (exclue) pour chacun des segments définis
            for (let j = 0; j < endPosition - startPosition; j++) {
                const interpolatedColor = [ Math.round(startRgb[0] + (endRgb[0] - startRgb[0]) * j / (endPosition - startPosition)),   // composante rouge
                                            Math.round(startRgb[1] + (endRgb[1] - startRgb[1]) * j / (endPosition - startPosition)),   // composante verte
                                            Math.round(startRgb[2] + (endRgb[2] - startRgb[2]) * j / (endPosition - startPosition)) ]; // composante bleue
                gradientColors.push(`rgb(${interpolatedColor.join(',')})`); // réassemblage des composantes RGB et ajout de la couleur interpolée dans la table
            }
        }
        gradientColors.push(colorStops[colorStops.length - 1].rgb); // ajout de la dernière couleur (qui, dans les calculs précédents, était restée exclue)

        return gradientColors;
    };

    const colors = getGradientColors([ { position: 1,  rgb: 'rgb(255, 100, 0)' },
                                       { position: 4,  rgb: 'rgb(255, 164, 0)' },
                                       { position: 8,  rgb: 'rgb(255, 220, 0)' },
                                       { position: 11, rgb: 'rgb(150, 220, 0)' },
                                       { position: 19, rgb: 'rgb(40,  160, 0)' },
                                       { position: 30, rgb: 'rgb(0,   100, 0)' } ]);
    const lastPosition = Math.round(colors.length * item.score / 100); // position de la dernière cellule "allumée"
    const duration = 3000;    // paramètre de réglage (en ms): ici, choix d'une animation qui dure 3 secondes
    const fixedTime = false;  // paramètre de réglage: - si true, tous les scorebars atteindront leur score en même temps (c'est-à-dire au bout de duration ms)
                              //                       - si false, la progression des scorebars est synchronisée (mais chaque animation s'arrêtera quand le score sera atteint, indépendamment des autres)

    const [position, setPosition] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {  // cadence déterminant la vitesse de progression
            if (position < lastPosition) {    // tant que le score n'est pas atteint
                setPosition((previousPos) => previousPos + 1);  // progression d'une cellule
            } else {
                clearInterval(interval);  // arrêt du processus dès qu'il a atteint le score
            }
        }, duration / (fixedTime ? lastPosition : colors.length));  // temporisation entre 2 cellules voisines

        return () => clearInterval(interval);  // nettoyage lorsque le composant est démonté
    }, [position, item.score]);

    return (
        <div className='bento valign'>
            <div className='halign'>
                <img className='icon' src={ `/src/assets/icons/${item.icon}.png` } alt={ item.name } />
                <h5>{ item.name }</h5>
            </div>
            <div className='halign'>
                { colors.map((color, index) => (
                    <div className='inlay-effect cellinlay'>
                        <div className='cell'
                            key={ index+1 }  // each child in a list should have a unique "key" prop
                            style={{ backgroundColor: index < position ? color : 'rgb(170, 190, 170)' }} // les cellules au-delà de la note restent "éteintes"
                        ></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScoreBar;