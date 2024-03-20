import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Users from "./Components/Users/Users";
import Users2 from "./Components/Users2/Users2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/header",
        element: <Header></Header>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },

      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/users2",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users2></Users2>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
