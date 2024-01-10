import React, { useState } from 'react';
import Header from "../components/layout/Header";
import Posts from "../components/features/Posts";
import NewPostModal from "../components/features/NewPostModal";

function Main() {
    const [posts, setPosts] = useState([
        {id: 1, upVotes: 123, title: "Some topic about Anxiety", content: "Some content about anxiety", nbrComments: 1, userName: "Moe"},
        {id: 2, upVotes: 432, title: "Depression problem", content: "test", nbrComments: 10, userName: "Anonymous"},
        {id: 3, upVotes: 512, title: "?????", content: "test", nbrComments: 113, userName: "Paiv"},
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const addNewPost = (newPost) => {
        const newPostData = {
            id: Date.now(),
            upVotes: 0,
            title: newPost.title,
            content: newPost.content,
            nbrComments: 0,
            userName: 'Anonymous',
        }
        setPosts([...posts, newPostData]);
        setIsModalOpen(false);
    }

    const showModal = () => {
        setIsModalOpen(true);
    }

    const hideModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div className="App bg-backgroundGrey min-h-screen shadow-md">
            <Header onNewPostClick={showModal}/>
            <Posts posts={posts}/>
            {isModalOpen && <NewPostModal onCloseModal={hideModal} onAddNewPost={addNewPost}/>}
        </div>
    );
}

export default Main;
