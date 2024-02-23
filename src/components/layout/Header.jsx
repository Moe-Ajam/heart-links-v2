import React from 'react';
import {useNavigate, Link} from "react-router-dom";
import profilePic from '../../assets/images/profile_picture.jpg'

function Header({onNewPostClick}) {

    const navigator = useNavigate();

    function navigateHome() {import React from 'react';
        import {useNavigate, Link} from "react-router-dom";
        import profilePic from '../../assets/images/profile_picture.jpg'

        function Header({onNewPostClick}) {

            const navigator = useNavigate();

            function navigateHome() {
                navigator("/home");
            }

            function navigateUserProfile() {
                navigator("/user-profile")
            }

            return (
                <div className="flex items-center h-16 bg-white drop-shadow-md">
                    <div className="flex space-x-10 ml-40">
                        {/*<button className="header-btn font-bold" onClick={navigateHome}>All</button>*/}
                        <Link className="header-btn font-bold" to={'/home'}>All</Link>
                        <button className="header-btn">Depression</button>
                        <button className="header-btn">Anxiety</button>
                        <button className="header-btn">OCD</button>
                    </div>
                    <div className="flex-grow"></div>
                    <div className="flex space-x-7 mr-20">
                        <button onClick={onNewPostClick} className="header-btn text-mainOrange font-bold">New Post
                        </button>
                        <img src={`${profilePic}`} className="profilePic cursor-pointer" alt="profile-pic"
                             onClick={navigateUserProfile}/>
                    </div>
                </div>
            );
        }

        export default Header;
        navigator("/home");
    }

    function navigateUserProfile() {
        navigator("/user-profile")
    }

    return (
        <div className="flex items-center h-16 bg-white drop-shadow-md">
            <div className="flex space-x-10 ml-40">
                {/*<button className="header-btn font-bold" onClick={navigateHome}>All</button>*/}
                <Link className="header-btn font-bold" to={'/home'}>All</Link>
                <button className="header-btn">Depression</button>
                <button className="header-btn">Anxiety</button>
                <button className="header-btn">OCD</button>
            </div>
            <div className="flex-grow"></div>
            <div className="flex space-x-7 mr-20">
                <button onClick={onNewPostClick} className="header-btn text-mainOrange font-bold">New Post
                </button>
                <img src={`${profilePic}`} className="profilePic cursor-pointer" alt="profile-pic"
                     onClick={navigateUserProfile}/>
            </div>
        </div>
    );
}

export default Header;