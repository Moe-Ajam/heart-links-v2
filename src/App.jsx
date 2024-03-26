import './App.css';
import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from "./views/Main";
import Login, {action as loginAction} from "./views/Login";
import PostViewer from "./views/PostViewer";
import UserProfile from "./views/UserProfile"
import ErrorPage from "./views/ErrorPage";
import RegisterView, {action as registrationAction} from "./views/RegisterView";
import {loader as postsLoader} from "./components/features/Posts";
import CallBackPage from "./Auth/CallBackPage";


function App() {


    const router = createBrowserRouter([
            {
                path: '/',
                errorElement: <ErrorPage/>,
                children: [
                    {
                        path: '/auth/login',
                        element: <Login/>,
                        action: loginAction
                    },
                    {
                        path: '/home',
                        element: <Main/>,
                        loader: postsLoader
                    },
                    {
                        path: '/callback',
                        element: <CallBackPage/>,
                    },
                    {
                        path: '/post',
                        element: <PostViewer/>
                    },
                    {
                        path: '/user-profile',
                        element: <UserProfile/>
                    },
                    {
                        path: '/auth/register',
                        element: <RegisterView/>,
                        action: registrationAction
                    }
                ]
            },

        ]
    );

    return (
            <RouterProvider router={router}/>
    );
}

export default App;
