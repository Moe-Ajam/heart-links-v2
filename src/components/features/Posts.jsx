import React, {useEffect, useState} from 'react';
import Post from "./Post";
import {useLoaderData, useNavigate} from "react-router-dom";
import ErrorMessage from "../common/ErrorMessage";


function Posts() {
    const navigate = useNavigate();

    const [apiPosts, setApiPosts] = useState([]);
    // const [, setIsLoading] = useState(false);
    const [error] = useState({message: '', isError: false});
    const posts = useLoaderData();




    useEffect(() => {
        setApiPosts(posts);
        console.log(posts);
    }, [posts]);



    if (error.isError) {
        return <ErrorMessage title="An error occured!" message={error.message}/>
    }
    function openPostDetails(post) {
        navigate("/post", {state: {title: post.title, content: post.content}});
    }


    return (
        <div className="flex flex-col items-center">
            {apiPosts.map(apiPost => <Post className="" key={apiPost.id} upVotes={apiPost.upvote} title={apiPost.title}
                                           nbrComments='1' userName={apiPost.userId}
                                           openPostDetails={() => openPostDetails(apiPost)}/>)}
        </div>
    );
}

export default Posts;


export async function loader() {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`);
    //console.log(response);
    if (!response.ok) {
        //...
    } else {
        return await response.json();
    }
}