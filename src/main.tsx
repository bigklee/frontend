import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { Default } from "./components/Default/index.tsx";
import { CollectionList } from "./components/CollectionList/index.tsx";
import { Archive } from "./components/Archive/index.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Default /> },
      {
        path: "explore",
        element: <Archive />,
        loader: async () => {
          return fetch("http://martini.buero.io:5000/api/v1/artworks");
        },
      },
      {
        path: "collections",
        element: <CollectionList />,
      },
      {
        path: "create",
        element: <div>Create collection</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
