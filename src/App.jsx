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
import {OktaAuth} from '@okta/okta-auth-js';
import {Security, LoginCallback} from '@okta/okta-react';
import ProtectedRoute from "./components/features/ProtectedRoute";


const oktaAuth = new OktaAuth({
    issuer: 'https://0oafuocw86HHZyueY5d7/oauth2/default',
    clientId: 'dev-91978975.okta.com',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email']
});

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
                        path: '/login/callback',
                        element: <LoginCallback/>,
                    },
                    {
                        path: '/home',
                        element: <ProtectedRoute><Main/></ProtectedRoute>,
                        loader: postsLoader
                    },
                    {
                        path: '/post',
                        element: <ProtectedRoute><PostViewer/></ProtectedRoute>
                    },
                    {
                        path: '/user-profile',
                        element: <ProtectedRoute><UserProfile/></ProtectedRoute>
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
        <Security oktaAuth={oktaAuth} restoreOriginalUri={async (_oktaAuth, originalUri) => {
            window.location.href = originalUri || window.location.origin;
        }}>
            <RouterProvider router={router}/>
        </Security>
    );
}

export default App;
