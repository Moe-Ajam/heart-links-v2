import React, {useEffect, useState} from 'react';
import backgroundImage from "../assets/images/login-bg.jpeg";
import {Form, json, Link, redirect, useNavigation} from "react-router-dom";
import Spinner from "../components/common/Spinner";

function RegisterView(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({message: '', isError: false});
    //const [isLoading, setIsLoading] = useState(false);

    const navigation = useNavigation();

    //setIsLoading(navigation.state === 'submitting');

    const isLoading = navigation.state === 'submitting';
    function handleUsernameChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    useEffect(() => {
        let timer;
        if (error.message) {
            timer = setTimeout(() => {
                setError({message: '', isError: false});
            }, 3000);
        }
        return () => clearTimeout(timer);
    }, [error]);

    return (<div className="fixed inset-0 flex justify-center items-center bg-cover bg-center bg-no-repeat h-screen"
                 style={{backgroundImage: `url(${backgroundImage})`}}>
        <Form method='post' className="flex flex-col bg-white w-152 shadow-lg p-14 rounded space-y-4">
            <h1>Welcome To HeartLinks!</h1>
            <h1>Please Enter Your Information Below:</h1>
            <input type="text" name="email" value={email} placeholder="Email"
                   className="border border-gray-300 rounded pl-2"
                   onChange={handleUsernameChange}/>
            <input type="password" name="password" value={password} placeholder="Password"
                   className="border border-gray-300 rounded pl-2"
                   onChange={handlePasswordChange}/>
            {error.isError && <p className='text-red-600'>{error.message}</p>}
            <button value="register" className="flex items-center button-primary self-end"
                    disabled={isLoading}>
                {isLoading ? 'loading' : 'Register'}
                {isLoading && <Spinner/>}
            </button>
            <div className="flex space-x-1 self-end">
                <p>already registered?</p>
                <Link to='/auth/login' className={`text-mainOrange ${isLoading ? 'pointer-events-none' : ''}`}>Login</Link>
            </div>
        </Form>
    </div>);
}

export default RegisterView;

export async function action({request, params}) {
    const data = await request.formData();

    const registrationData = {
        email: data.get('email'),
        password: data.get('password'),
    }
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registrationData)
    });

    if (!response.ok) {
        throw json({message: 'Could not register user.'}, {status: response.status});
    }

    return redirect('/auth/login');
}