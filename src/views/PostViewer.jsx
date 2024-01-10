import React from 'react';
import Header from "../components/layout/Header";
import {useLocation} from "react-router-dom";

function PostViewer() {
    const location = useLocation();
    const { title, content} = location.state || {};

    return (
        <div>
            <Header/>
            <div className="flex flex-col space-y-4 mt-5 mx-48">
                <h1 className="font-bold">{title}</h1>
                <p>
                    {content}
                </p>
            </div>
        </div>
    );
}

export default PostViewer;