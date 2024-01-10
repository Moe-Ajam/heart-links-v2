import React from 'react';
import Post from "./Post";
import {useNavigate} from "react-router-dom";



function Posts({posts}) {
    const navigate = useNavigate();
    function openPostDetails(post) {
        navigate("/post", {state: {title: post.title, content: post.content}});
    }
    
    return (
        <div className="flex flex-col items-center">
            {posts.map((post => (
                <Post className="" key={post.id} upVotes={post.upVotes} title={post.title} nbrComments={post.nbrComments} userName={post.userName} openPostDetails={() => openPostDetails(post)}/>
            )))}
        </div>
    );
}

export default Posts;