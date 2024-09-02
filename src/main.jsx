import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from './App.jsx'
import './index.css'
import About from './Pages/About/About.jsx'
import Contact from './Pages/Contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/contact-us",
    element: <Contact/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);