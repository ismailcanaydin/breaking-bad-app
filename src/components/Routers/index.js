import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    createRoutesFromElements,
  } from "react-router-dom";
  
  import Home from "../../pages/Home/Home";
  import Abouth from "../../pages/Abouth";
  import Users from '../../pages/Users'
  import RouteLayout from "../../pages/RouteLayout";
  
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RouteLayout />}>
            <Route index element={<Home />} />
            <Route path="/abouth" element={<Abouth />} />
            <Route path="/users" element={<Users />} />
        </Route>
    )
);

function Routers() {
    return (
        <div>
            <React.StrictMode>
                <RouterProvider router={router} />
            </React.StrictMode>
        </div>
    )
}

export default Routers