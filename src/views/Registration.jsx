import React from 'react';
import ButtonPrimary from "../components/common/button-primary";
import ButtonSecondary from "../components/common/button-secondary";
import {useNavigate} from "react-router-dom";

function Registration() {

    const navigator = useNavigate();

    function navigateLogin () {
        navigator("/login");
    }
    return (
        <div className="flex w-full h-full items-center justify-center mt-20">
            <div className="flex flex-col w-152 space-y-4">
                <label>User Registration</label>
                <input type="text" name="userName" placeholder="User Name"/>
                <input type="email" name="email" placeholder="Email Address"/>
                <input type="password" name="passowrd" placeholder="Password"/>
                <div className="flex self-end space-x-4">
                    <ButtonSecondary text="Cancel" onClick={navigateLogin}/>
                    <ButtonPrimary text="Register"/>
                </div>
            </div>
        </div>
    );
}

export default Registration;