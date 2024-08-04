import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home";

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
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
]);
