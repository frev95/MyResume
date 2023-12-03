// ================ Point d'entrée de l'application ================ //

import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import des composants utilisés
import Home from './pages/Home.jsx';
import Competences from './pages/Competences.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';

// Création des routes vers les différentes pages définies dans la barre de navigation
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/competences",
    element: <Competences />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
