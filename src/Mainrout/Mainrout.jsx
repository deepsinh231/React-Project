import React from 'react';
import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from './Page/Home.jsx'
import About from './Page/About.jsx'
import Login from './Page/Login.jsx'
import Sing from './Page/Sing.jsx'
import Api from './Page/Api.jsx'

const Mainrout = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/home" replace />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/sing",
        element: <Sing />,
    },
    {
        path: "/api",
        element: <Api />,
    },
    
])


export default Mainrout;