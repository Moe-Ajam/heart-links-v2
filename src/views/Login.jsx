import React, {useEffect, useState} from 'react';
import ButtonPrimary from "../components/common/button-primary";
import backgroundImage from '../assets/images/login-bg.jpeg';
import { useNavigate} from "react-router-dom";
import axios from "axios";
import ButtonSecondary from "../components/common/button-secondary";

function Login() {
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        let timer;
        if (errorMessage) {
            timer = setTimeout(() => {
                setErrorMessage('');
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


    function onSubmit(e) {
        e.preventDefault();

        // todo: Refactor to use the new documented fetch request
        axios.post(`${process.env.REACT_APP_API_URL}/api/login`, {email, password})
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    navigate('/home');
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
                if (error.response && error.response.status === 401) {
                    setErrorMessage("Wrong username or password entered!");
                } else {
                    setErrorMessage("An error occurred. Please Try again later.");
                }
            })
    }

    function onRegister() {
        navigate("/register");
    }


    return (
        <div className="fixed inset-0 flex justify-center items-center bg-cover bg-center bg-no-repeat h-screen" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="flex flex-col bg-white w-152 shadow-lg p-14 rounded space-y-4">
                <h1>Welcome To HeartLinks!</h1>
                <input type="text" name="email" value={email} placeholder="Email" className="border border-gray-300 rounded pl-2"
                       onChange={handleUsernameChange}/>
                <input type="password" name="password" value={password} placeholder="Password" className="border border-gray-300 rounded pl-2"
                       onChange={handlePasswordChange}/>
                {errorMessage && <p className="text-red-600">{errorMessage}</p>}
                <div className="flex self-end space-x-4">
                    <ButtonPrimary text="Login" onClick={onSubmit}/>
                    <ButtonSecondary text="Register" onClick={onRegister}/>
                </div>
            </div>
        </div>
    );
}

export default Login;