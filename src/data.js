// ================ Ce fichier contient toutes les données qui vont alimenter le site ================ //



// -------------- Liste des technos utilisées et niveaux de compétence attribués (en %) -------------- //

export const technos = [ { id: 1, name: "HTML", icon: "html", score: "80" },
                         { id: 2, name: "CSS", icon: "css", score: "75" },
                         { id: 4, name: "JavaScript", icon: "js", score: "85" },
                         { id: 3, name: "NodeJS", icon: "node", score: "65" },
                         { id: 5, name: "jQuery", icon: "jquery", score: "80" },
                         { id: 6, name: "AsyncJS and XML", icon: "ajax", score: "55" },
                         { id: 7, name: "ReactJS", icon: "react", score: "80" },
                         { id: 8, name: "Symfony", icon: "symfony", score: "45" },
                         { id: 9, name: "PHP", icon: "php", score: "50" },
                         { id: 10, name: "C/C++", icon: "cpp", score: "90" },
                         { id: 11, name: "Swift", icon: "swift", score: "95" },
                         { id: 12, name: "SwiftUI (iOS)", icon: "swiftui", score: "75" } ];



// ---------------- Autres compétences ---------------- //

export const otherSkills = [ "Sens développé de la logique et du raisonnement mathématique",
                             "Excellentes capacités d'abstraction et de modélisation",
                             "Rigueur dans le travail et souci du détail",
                             "Rédaction de documents synthétiques",
                             "Utilisation de GIMP (retouche d'image, création de plan)",
                             "Sensibilité artistique" ];



// ---------------- Liste des expériences professionnelles ---------------- //

export const experiences = [ { label: "Achat et aménagement de terrains pour la revente" },
                             { label: "Contacts avec la Recherche en Informatique Musicale",
                               refs: [ { name: "IRCAM", url: "www.ircam.fr" },
                                       { name: "GRM", url: "www.ina.fr/offres-et-services/ina-grm" },
                                       { name: "GRAME", url: "www.grame.fr" } ] } ];



// ---------------- Liste des centres d'intérêt ---------------- //

export const hobbies = [ "Voyages", "Nature", "Cuisine" ];



// ---------------- Liste des projets mentionnés dans le portfolio ---------------- //

export const projects = [ { id: 1,  name: "Cinemax+",
                                    technos: [7, 4, 2],
                                    image: "",
                                    description: "Cette application permet de chercher des films dans la base de données IMDb et de se constituer une filmothèque personnelle en indiquant ses favoris.",
                                    srcUrl: "",
                                    appUrl:"" },
                          { id: 2,  name: "Bot OpenAI personnalisé",
                                    technos: [7, 1, 2],
                                    image: "",
                                    description: "Il s'agit d'un mini chatGPT, configuré pour donner des réponses dans le cadre de thématiques prédéfinies. En dehors de ce cadre, il refusera de répondre.",
                                    srcUrl: "",
                                    appUrl:"" },
                          { id: 3,  name: "Gestionnaire simplifié de factures",
                                    technos: [5, 1, 2],
                                    image: "",
                                    description: "Réalisée dans le cadre d'un TP, cette application permet d'enregistrer en local storage des factures saisies à l'aide d'un formulaire. Ces factures peuvent ensuite être modifiées ou supprimées.",
                                    srcUrl: "",
                                    appUrl:"" },
                          { id: 4,  name: "Mini quiz",
                                    technos: [4],
                                    image: "",
                                    description: "Exercice ayant pour objectif de traiter les réponses à une liste de questions. Une couleur est attribuée à chaque réponse en fonction du cas: exacte, fausse ou sans réponse.",
                                    srcUrl: "",
                                    appUrl:"" },
                          { id: 5,  name: "Sans nom",
                                    technos: [2],
                                    image: "",
                                    description: "Mises en page différentes en fonction de la taille d'écran (ordinateur, tablette ou smartphone) grâce aux media queries",
                                    srcUrl: "",
                                    appUrl:"" },
                          { id: 6,  name: "Quiz",
                                    technos: [11],
                                    image: "",
                                    description: "Application pour iPhone réalisée dans le cadre d'une initiation au développement iOS. Le mécanisme de questions/réponses est fonctionnel; il reste juste à l'alimenter via des API de quizzes.",
                                    srcUrl: "",
                                    appUrl:"" },
                          { id: 7,  name: "Instrument de musique virtuel",
                                    technos: [10],
                                    image: "",
                                    description: "Ma toute première réalisation. Application pour Mac OS 9 (inachevée) dont l'objectif était d'abord de tester des concepts, afin de les intégrer ultérieurement dans des applications plus étoffées. Aujourd'hui, il faudrait tout réécrire pour macOS 14 (Sonoma).",
                                    srcUrl: "",
                                    appUrl:"" },
                          { id: 8,  name: "",
                                    technos: [""],
                                    image: "",
                                    description: "",
                                    srcUrl: "",
                                    appUrl:"" },
                          { id: 9,  name: "",
                                    technos: [""],
                                    image: "",
                                    description: "",
                                    srcUrl: "",
                                    appUrl:"" },
                          { id: 10, name: "",
                                    technos: [""],
                                    image: "",
                                    description: "",
                                    srcUrl: "",
                                    appUrl:"" },
                          { id: 11, name: "",
                                    technos: [""],
                                    image: "",
                                    description: "",
                                    srcUrl: "",
                                    appUrl:"" },
                          { id: 12, name: "",
                                    technos: [""],
                                    image: "",
                                    description: "",
                                    srcUrl: "",
                                    appUrl:"" },
                          { id: 13, name: "",
                                    technos: [""],
                                    image: "",
                                    description: "",
                                    srcUrl: "",
                                    appUrl:"" },
                          { id: 14, name: "",
                                    technos: [""],
                                    image: "",
                                    description: "",
                                    srcUrl: "",
                                    appUrl:"" } ];

                            
                            
// ---------------- Liste des technoIDs assignées au sélecteur ---------------- //

export const filters = [ 1, 2, 4, 5, 7, 9, 10, 11 ];
