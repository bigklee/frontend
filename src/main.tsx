import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createHashRouter, json } from "react-router-dom";
import { Default } from "./components/Default/index.tsx";
import { CollectionList } from "./components/CollectionList/index.tsx";
import { Archive } from "./components/Archive/index.tsx";
import { Artwork } from "./components/Artwork/index.tsx";
import { Collection } from "./components/Collection/index.tsx";

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
          const [data, filters] = await Promise.all([
            (
              await fetch("http://martini.buero.io:5000/api/v1/artworks")
            ).json(),
            (await fetch("http://martini.buero.io:5000/api/v1/filters")).json(),
          ]);
          return json({ data, filters });
        },
      },
      {
        path: "collections",
        element: <CollectionList />,
      },
      {
        path: "essentials",
        element: <Collection />,
        loader: async () => {
          return fetch("http://martini.buero.io:5000/api/v1/collections/2");
        },
      },
      {
        path: "create",
        element: <div>Create collection</div>,
      },
      { path: "artwork", element: <Artwork /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
