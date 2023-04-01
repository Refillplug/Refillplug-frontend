import React from "react";
import * as layouts from '../layouts';

// pages
const pages = ({
    home: React.lazy(() => import('../pages')),
});

export default [
    { path: '/', element: layouts.main(pages.home) }
];
