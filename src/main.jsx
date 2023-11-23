import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './styles.css';
// + import des polices ?

// Import des composants utilisés
import Home from './pages/Home.jsx';
import Page2 from './pages/Page2.jsx';
import Page3 from './pages/Page3.jsx';
import Page4 from './pages/Page4.jsx';

// Création des routes vers les différentes pages définies dans la barre de navigation
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/page2",
    element: <Page2 />,
  },
  {
    path: "/page3",
    element: <Page3 />,
  },
  {
    path: "/page4",
    element: <Page4 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
