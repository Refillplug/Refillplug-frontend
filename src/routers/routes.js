import React from "react";
import * as layouts from '../layouts';

// pages
const pages = ({
    home: React.lazy(() => import('../pages')),
    login: React.lazy(() => import('../pages/auth/login')),
    signup: React.lazy(() => import('../pages/auth/signup')),
    forgotPassword: React.lazy(() => import('../pages/auth/forgot')),
    reActivateUser: React.lazy(() => import('../pages/auth/activate')),

});

export default [
    { path: '/', element: layouts.main(pages.home) },
    { path: '/login', element: layouts.auth(pages.login) },
    { path: '/register', element: layouts.auth(pages.signup) },
    { path: '/password-reset', element: layouts.auth(pages.forgotPassword) },
    { path: '/password-reset-confirm', element: layouts.auth(pages.reActivateUser) },
];
