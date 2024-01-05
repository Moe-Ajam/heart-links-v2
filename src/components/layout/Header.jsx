import React from 'react';


function Header({onNewPostClick}) {

    return (
            <div className="flex items-center h-16 bg-white drop-shadow-md">
                <div className="flex space-x-10 ml-40">
                    <button className="header-btn font-bold">All</button>
                    <button className="header-btn">Depression</button>
                    <button className="header-btn">Anxiety</button>
                    <button className="header-btn">OCD</button>
                </div>
                <div className="flex-grow"></div>
                <button onClick={onNewPostClick} className="header-btn mr-52 text-mainOrange font-bold">New Post</button>
            </div>
    );
}

export default Header;