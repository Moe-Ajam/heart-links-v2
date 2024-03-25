import React, {useEffect, useState} from 'react';
import backgroundImage from '../assets/images/login-bg.jpeg';
import {Form, json, redirect, useNavigate, useNavigation} from "react-router-dom";
import Spinner from "../components/common/Spinner";

function Login() {
    const [errorMessage, setErrorMessage] = useState({message: '', isError: false});
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();
    const isLoading = navigation.state === 'submitting';

    useEffect(() => {
        let timer;
        if (errorMessage) {
            timer = setTimeout(() => {
                setErrorMessage({message: '', isError: false});
            }, 3000);
        }
        return () => clearTimeout(timer);
    }, [errorMessage]);

    function handleUsernameChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }


    function onRegister() {
        navigate('/auth/register');
    }


    return (<div className="fixed inset-0 flex justify-center items-center bg-cover bg-center bg-no-repeat h-screen"
                 style={{backgroundImage: `url(${backgroundImage})`}}>
        <Form method='post' className="flex flex-col bg-white w-152 shadow-lg p-14 rounded space-y-4">
            <h1>Welcome To HeartLinks!</h1>
            <input type="text" name="email" value={email} placeholder="Email"
                   className="border border-gray-300 rounded pl-2"
                   onChange={handleUsernameChange}/>
            <input type="password" name="password" value={password} placeholder="Password"
                   className="border border-gray-300 rounded pl-2"
                   onChange={handlePasswordChange}/>
            {errorMessage.isError && <p className="text-red-600">{errorMessage.message}</p>}
            {navigation.state === "loading" && <Spinner color='green'/>}
            <div className="flex self-end space-x-4">
                <button value="login"
                        className={`flex items-center button-primary self-end ${isLoading ? 'bg-gray-500' : ''}`}
                        disabled={isLoading || navigation.state === 'loading'}>
                    {isLoading ? 'Loading' : 'Login'}
                    {isLoading && <Spinner/>}
                </button>
                <button className="flex items-center button-secondary self-end" onClick={onRegister}
                        disabled={isLoading || navigation.state === "loading"}>
                    Register
                </button>
            </div>
        </Form>
    </div>);
}

export default Login;


export async function action({request}) {
    const data = await request.formData();

    const loginData = {
        email: data.get('email'), password: data.get('password'),
    }

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/login`, {
        method: 'POST', headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify(loginData)
    });

    console.log(response);

    if (response.status === 401) {
        throw json({message: 'Wrong username or password.'}, {status: 401});
    } else if (response.ok) {
        return redirect('/home');
    } else {
        throw json({message: 'Could not Login, something went wrong.'}, {status: 500});
    }
}