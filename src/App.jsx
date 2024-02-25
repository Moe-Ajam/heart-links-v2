import './App.css';
import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from "./views/Main";
import Login from "./views/Login";
import PostViewer from "./views/PostViewer";
import UserProfile from "./views/UserProfile"
import ErrorPage from "./views/ErrorPage";

function App() {

    const router = createBrowserRouter([
        {
          path: '/',
          errorElement: <ErrorPage />
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/home',
            element: <Main/>
        },
        {
            path: '/post',
            element: <PostViewer/>
        },
        {
            path: '/user-profile',
            element: <UserProfile/>
        }
        ]
    );

    return <RouterProvider router={router}/>
}

export default App;
