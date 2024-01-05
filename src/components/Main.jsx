import React, { useState } from 'react';
import Header from "./Header";
import Posts from "./Posts";
import NewPostModal from "./NewPostModal";

function Main() {
    const [posts, setPosts] = useState([
        {id: 1, upVotes: 123, title: "Some topic about Anxiety", nbrComments: 1, userName: "Moe"},
        {id: 2, upVotes: 432, title: "Depression problem", nbrComments: 10, userName: "Anonymous"},
        {id: 3, upVotes: 512, title: "?????", nbrComments: 113, userName: "Paiv"},
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const addNewPost = (newPost) => {
        const newPostData = {
            id: Date.now(),
            upVotes: 0,
            title: newPost.title,
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
