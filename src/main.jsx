import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './styles.css';
// + import des polices ?

// Import des composants utilisés
import Home from './pages/Home.jsx';

// Création des routes vers les différentes pages définies dans la barre de navigation
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/page2",
    element: <h1>Page 2</h1>,
  },
  {
    path: "/page3",
    element: <h1>Page 3</h1>,
  },
  {
    path: "/page4",
    element: <h1>Page 4</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
