import React from 'react';
import ButtonSecondary from "../components/common/button-secondary";
import ButtonPrimary from "../components/common/button-primary";
import profilePic from "../assets/images/profile_picture.jpg"
import {useNavigate} from "react-router-dom";
import Header from "../components/layout/Header";
function UserProfile() {

    const navigator = useNavigate();
    function cancelUpdate() {
        navigator("/home");
    }

    return (
        <>
            <Header/>
            <div className="flex w-full h-full items-center justify-center mt-20">
                <div className="flex flex-col w-152 space-y-4">
                    <img src={`${profilePic}`} alt="profile-pic" className="profilePic"/>
                    <div>
                        <ButtonPrimary text="Change Picture"/>
                    </div>
                    <label>Update User Information</label>
                    <input type="text" name="userName" placeholder="User Name"/>
                    <input type="email" name="email" placeholder="Email Address"/>
                    <label>Change Password</label>
                    <input type="password" name="oldPassword" placeholder="Old Password"/>
                    <input type="password" name="newPassword" placeholder="New Password"/>
                    <div className="flex self-end space-x-4">
                        <ButtonSecondary text="Cancel" onClick={cancelUpdate}/>
                        <ButtonPrimary text="Submit" className={cancelUpdate}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserProfile;