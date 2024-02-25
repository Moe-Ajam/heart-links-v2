import React, {useEffect, useState} from 'react';
import Post from "./Post";
import {useNavigate} from "react-router-dom";
import ErrorMessage from "../common/ErrorMessage";
import {fetchAvailablePosts} from "../../apis/http";


function Posts({posts}) {
    const navigate = useNavigate();

    const [apiPosts, setApiPosts] = useState([]);
    const [, setIsLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchPosts() {
            setIsLoading(true);
            try {
                const posts = await fetchAvailablePosts();
                setApiPosts(posts);
            } catch (e) {
                setError({message: e.message || 'Could not fetch data, please try again later',});
            }

            setIsLoading(false);
        }


        fetchPosts().then();
    }, []);

    if (error) {
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