import React from "react";
import routes from './routes';
import * as RouterDom from 'react-router-dom';
import Loader from "../components/loader"; // loader component


/* A React component that is rendering the routes. */
export default function () {
    return <React.Suspense fallback={<Loader />}>
        <RouterDom.BrowserRouter>
            <RouterDom.Routes>
                {
                    routes.map((obj, index) => <RouterDom.Route {...obj} key={index} element={<obj.element />} />)
                }
            </RouterDom.Routes>
        </RouterDom.BrowserRouter>
    </React.Suspense>
};