import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import { Login } from "./Login";
import { Register } from './Register';
import {createBrowserRouter,redirect,Navigate,Route,RouterProvider} from 'react-router-dom'
function App() {

    const [currentForm , setCurrentForm ] = useState('login');

    const toggleForm = (formName) =>{
        setCurrentForm(formName);
    }

    const router_map=createBrowserRouter([
        {
            path:'/',
            element:<Navigate to="/login" />
        },

        {
            path:'/login',
            element: < Login />
        },
        {
            path:'/signup',
            element:<Register />
        }
    ]);

    return (
        <div className="App">

            <RouterProvider router={router_map} />
        </div>
    );
}

export default App;