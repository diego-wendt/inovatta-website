import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home";
import { Empresa } from "../pages/Empresa";
import { Contato } from "../pages/Contato";
import { Solucoes } from "../pages/Solucoes";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/empresa",
        element: <Empresa />,
      },
      {
        path: "/solucoes",
        element: <Solucoes />,
      },
      {
        path: "/contato",
        element: <Contato />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
]);
