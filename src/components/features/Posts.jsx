import React from 'react';
import Post from "./Post";


function Posts({posts}) {
    return (
        <div className="flex flex-col items-center">
            {posts.map((post => (
                <Post key={post.id} upVotes={post.upVotes} title={post.title} nbrComments={post.nbrComments} userName={post.userName}/>
            )))}
        </div>
    );
}

export default Posts;