import React, {useEffect, useState} from 'react';
import ButtonPrimary from "../components/common/button-primary";
import backgroundImage from '../assets/images/login-bg.jpeg';
import {useNavigate} from "react-router-dom";
import ButtonSecondary from "../components/common/button-secondary";
import {fetchLogin} from "../apis/http";

function Login() {
    const [errorMessage, setErrorMessage] = useState({message: '', isError: false});
    const [, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigator = useNavigate();

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


    async function onSubmit(e) {
        try {
            e.preventDefault();

            setIsLoading(true);
            const response = await fetchLogin({email: email, password: password});
            setIsLoading(false);
            if (response.ok) {
                navigator('/home');
            } else if (response.status === 401) {
                setErrorMessage({message: 'Wrong email or password', isError: true})
            } else {
                setErrorMessage({message: 'Something went wrong, please try again later 😢', isError: true})
            }
        } catch (e) {
            setIsLoading(false);
            setErrorMessage({message: 'Something went wrong, please try again later 😢', isError: true});
        }
    }

    function onRegister() {
        navigate('/auth/register');
    }


    return (
        <div className="fixed inset-0 flex justify-center items-center bg-cover bg-center bg-no-repeat h-screen"
             style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="flex flex-col bg-white w-152 shadow-lg p-14 rounded space-y-4">
                <h1>Welcome To HeartLinks!</h1>
                <input type="text" name="email" value={email} placeholder="Email"
                       className="border border-gray-300 rounded pl-2"
                       onChange={handleUsernameChange}/>
                <input type="password" name="password" value={password} placeholder="Password"
                       className="border border-gray-300 rounded pl-2"
                       onChange={handlePasswordChange}/>
                {errorMessage.isError && <p className="text-red-600">{errorMessage.message}</p>}
                <div className="flex self-end space-x-4">
                    <ButtonPrimary text="Login" onClick={onSubmit}/>
                    <ButtonSecondary text="Register" onClick={onRegister}/>
                </div>
            </div>
        </div>
    );
}

export default Login;