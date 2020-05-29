import React, { lazy } from "react";
import { Redirect } from "react-router-dom";

import Root from '../root';
import Home from '../root/home';
import Home2 from "../root/home2";

const Error = () => (
    <div>
        <h1>404</h1>
    </div>
)


const RootComponent = lazy(() => Root);
const HomeComponent = lazy(() => Home);
const ErrorComponent = lazy(() => Error);


const routes = [
    {
        path: "/root",
        component: Root,
        routes: [
            {
                path: "/root/home",
                exact: true,
                component: Home
            },
            {
                path: "/root/home2",
                exact: true,
                component: Home2
            },
            {
                component: (props) => <Redirect to="/error" />,
            },
        ]
    },
    {
        path: "/error",
        component: Error
    },
    {
        component: (props) => <Redirect to="/error" />,
    },
];

export default routes;