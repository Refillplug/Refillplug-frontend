import React from "react";
import * as layouts from '../layouts';

// pages
const pages = ({
    home: React.lazy(() => import('../pages')),
    reset: React.lazy(() => import('../pages/auth/reset')),
    login: React.lazy(() => import('../pages/auth/login')),
    signup: React.lazy(() => import('../pages/auth/signup')),
    forgot: React.lazy(() => import('../pages/auth/forgot')),
    activate: React.lazy(() => import('../pages/auth/activate')),
});

export default [
    { path: '/', element: layouts.main(pages.home) },
    { path: '/reset', element: layouts.auth(pages.reset) },
    { path: '/login', element: layouts.auth(pages.login) },
    { path: '/signup', element: layouts.auth(pages.signup) },
    { path: '/forgot', element: layouts.auth(pages.forgot) },
    { path: '/activate', element: layouts.auth(pages.activate) },
];
