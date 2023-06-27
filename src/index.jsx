import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaginaInicial from "./paginas/inicial/inicial";
import PaginaPesquisar from "./paginas/pesquisar/pesquisar";
import PaginaDestaques from "./paginas/destaques/destaques";
import PaginaSalvos from "./paginas/salvos/salvos";
import PaginaHistorico from "./paginas/historico/historico";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <PaginaInicial />,
      },
      {
        path: "/pesquisar",
        element: <PaginaPesquisar />,
      },
      {
        path: "/destaques",
        element: <PaginaDestaques />,
      },
      {
        path: "/salvos",
        element: <PaginaSalvos />,
      },
      {
        path: "/historico",
        element: <PaginaHistorico />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
