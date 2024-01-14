import React, {useEffect, useState} from 'react';
import ButtonPrimary from "../components/common/button-primary";
import backgroundImage from '../assets/images/login-bg.jpeg';
import { useNavigate} from "react-router-dom";
import axios from "axios";

// todo: unable to reach the api successfully
function Login() {
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        let timer;
        if (errorMessage) {
            timer = setTimeout(() => {
                setErrorMessage('');
            }, 5000);
        }
        return () => clearTimeout(timer);
    }, [errorMessage]);

    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }


    function onSubmit(e) {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/api/login`, {username, password})
            .then(response => {
                console.log(response);
                navigate('/home');
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


    return (
        <div className="fixed inset-0 flex justify-center items-center bg-cover bg-center bg-no-repeat h-screen" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="flex flex-col bg-white w-152 shadow-lg p-14 rounded space-y-4">
                <h1>Welcome To HeartLinks!</h1>
                <input type="text" name="username" value={username} placeholder="Username" className="border border-gray-300 rounded pl-2"
                       onChange={handleUsernameChange}/>
                <input type="password" name="password" value={password} placeholder="Password" className="border border-gray-300 rounded pl-2"
                       onChange={handlePasswordChange}/>
                {errorMessage && <p className="text-red-600">{errorMessage}</p>}
                <ButtonPrimary text="Login" className="self-end" onClick={onSubmit}/>
            </div>
        </div>
    );
}

export default Login;