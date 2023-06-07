import React from "react";
import * as layouts from '../layouts';

// pages
const pages = ({
    home: React.lazy(() => import('../pages')),
    plan: React.lazy(() => import('../pages/plan')),
    service: React.lazy(() => import('../pages/service')),
    product: React.lazy(() => import('../pages/product')),
    login: React.lazy(() => import('../pages/auth/login')),
    signup: React.lazy(() => import('../pages/auth/signup')),
    forgotPassword: React.lazy(() => import('../pages/auth/forgot')),
    reActivateUser: React.lazy(() => import('../pages/auth/activate')),

});

export default [
    { path: '/', element: layouts.main(pages.home) },
    { path: '/plan', element: layouts.main(pages.plan) },
    { path: '/login', element: layouts.auth(pages.login) },
    { path: '/product', element: layouts.main(pages.product) },
    { path: '/service', element: layouts.main(pages.service) },
    { path: '/register', element: layouts.auth(pages.signup) },
    { path: '/password-reset', element: layouts.auth(pages.forgotPassword) },
    { path: '/reactivate', element: layouts.auth(pages.reActivateUser) },
];
