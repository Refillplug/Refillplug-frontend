import React from "react";
import routes from './routes';
import * as RouterDom from 'react-router-dom';

/* A React component that is rendering the routes. */
export default function () {
    return <React.Suspense fallback={<span>loading</span>}>
        <RouterDom.BrowserRouter>
            <RouterDom.Routes>
                {
                    routes.map((obj, index) => <RouterDom.Route {...obj} key={index} element={<obj.element />} />)
                }
            </RouterDom.Routes>
        </RouterDom.BrowserRouter>
    </React.Suspense>
};