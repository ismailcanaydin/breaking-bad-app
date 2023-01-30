import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    createRoutesFromElements,
} from "react-router-dom";

import Home from "../../pages/Home";
import Quotes from "../../pages/Quotes";
import RouteLayout from "../../pages/RouteLayout";
import Detail from '../../pages/Detail';
import QuoteDetail from '../../pages/QuoteDetail';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RouteLayout />}>
            <Route index element={<Home />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path='/char/:char_id' element={<Detail />} />
            <Route path='/quotes/:quote_id' element={<QuoteDetail />} />
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