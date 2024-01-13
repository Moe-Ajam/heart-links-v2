import React, {useEffect, useState} from 'react';
import Post from "./Post";
import {useNavigate} from "react-router-dom";
import {fetchPosts} from "../../apis/postService";



function Posts({posts}) {
    const [apiPosts, setApiPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetchPosts()
            .then(response => {
                setApiPosts(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                setError(error);
                setIsLoading(false);
            })
    }, []);

    const navigate = useNavigate();

    function openPostDetails(post) {
        navigate("/post", {state: {title: post.title, content: post.content}});
    }


    return (
        <div className="flex flex-col items-center">
            {apiPosts.map(apiPost => <Post className="" key={apiPost.id} upVotes={apiPost.upvote} title={apiPost.title} nbrComments='1' userName={apiPost.userId} openPostDetails={() => openPostDetails(apiPost)}/>)}
        </div>
    );
}

export default Posts;