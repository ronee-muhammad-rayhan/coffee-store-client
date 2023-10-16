import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UpdateCoffee from './components/UpdateCoffee.jsx';
import AddCoffee from './components/AddCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "addCoffee",
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "/update-coffee",
    element: <UpdateCoffee></UpdateCoffee>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
