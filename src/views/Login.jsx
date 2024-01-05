import React, {useState} from 'react';
import ButtonPrimary from "../components/common/button-primary";
import backgroundImage from '../assets/images/login-bg.jpeg';
import {useNavigate} from "react-router-dom";

function Login() {
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '', password: ''
    })
    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name] : value
        }))
    }
    function onSubmit(e) {
        e.preventDefault();
        console.log(formData.username);
        if (formData.username === "Moe.Ajam" && formData.password === "123") {
            navigate('/home');
        } else {
            console.log("Invalid username");
            setErrorMessage("Wrong username or password entered!");
            setTimeout(()=> {
                setErrorMessage('');
            }, 5000);
        }
    }

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-cover bg-center bg-no-repeat h-screen" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="flex flex-col bg-white w-152 shadow-lg p-14 rounded space-y-4">
                <h1>Welcome To HeartLinks!</h1>
                <input type="text" name="username" value={formData.username} placeholder="Username" className="border border-gray-300 rounded pl-2"
                       onChange={handleChange}/>
                <input type="password" name="password" value={formData.password} placeholder="Password" className="border border-gray-300 rounded pl-2"
                       onChange={handleChange}/>
                {errorMessage && <p className="text-red-600">{errorMessage}</p>}
                <ButtonPrimary text="Login" className="self-end" onClick={onSubmit}/>
            </div>
        </div>
    );
}

export default Login;