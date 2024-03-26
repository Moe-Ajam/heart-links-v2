import React from 'react';
import {useNavigate, NavLink} from "react-router-dom";
import profilePic from '../../assets/images/profile_picture.jpg'
import {authorize} from '../../Auth/AuthService'
import AuthConfig from "../../Auth/AuthConfig";

function Header({onNewPostClick}) {

    const navigator = useNavigate();

    function navigateUserProfile() {
        navigator("/user-profile")
    }

    const handleLogin = () => {
        authorize(AuthConfig);
    }

    return (
        <div className="flex items-center h-16 bg-white drop-shadow-md">
            <div className="flex space-x-10 ml-40">
                <NavLink className={({isActive}) => isActive ? "header-btn underline font-bold" : "header-btn"} end
                         to={'/home'}>All</NavLink>
                <NavLink className="header-btn" to={'/home/depression'}>Depression</NavLink>
                <NavLink className="header-btn" to={'/home/anxiety'}>Anxiety</NavLink>
                <NavLink className="header-btn" to={'/home/ocd'}>OCD</NavLink>
            </div>
            <div className="flex-grow"></div>
            <div className="flex space-x-7 mr-20">
                <button onClick={handleLogin}>Login</button>
                <button onClick={onNewPostClick} className="header-btn text-mainOrange font-bold">New Post
                </button>
                <img src={`${profilePic}`} className="profilePic cursor-pointer" alt="profile-pic"
                     onClick={navigateUserProfile}/>
            </div>
        </div>
    );
}

export default Header;