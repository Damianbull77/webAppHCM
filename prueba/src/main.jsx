import React from 'react';
import ReactDOM from 'react-dom/client';
import DetalleHabitacion from './routes/detalleHabitacion';
import Root from './routes/root';
import './index.css';
import ErrorPage from './page-error';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Descripcion from './Descripcion';
import Prueba from './Prueba';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />       
  },
  {
    path: "/Descripcion",
    element: <Descripcion/>
  },
  {
    path: "/pruebaS",
    element: <Prueba />
  },
  { path: "/habitacion/:id",
   element: <DetalleHabitacion />}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);
