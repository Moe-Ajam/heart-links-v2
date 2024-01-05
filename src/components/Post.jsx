import React, {useState} from 'react';
import upvoteArrow from '../resources/images/upvote-arrow.png';
import upvoteArrowClicked from '../resources/images/upvotes-arrow-clicked.png';



function Post({upVotes, title, nbrComments, userName}) {

    const [isUpvote, setIsUpvote] = useState(false);
    const [upVoteNbr, setUpVoteNbr] = useState(upVotes);
    const onUpvoteToggle = () => {
        !isUpvote ? setUpVoteNbr(upVoteNbr + 1) : setUpVoteNbr(upVoteNbr - 1);
        setIsUpvote(!isUpvote);
    }

    return (
        <div className="flex mt-6">
            <div className="flex flex-col text-black text-opacity-40" onClick={onUpvoteToggle}>
                <img src={isUpvote ? upvoteArrowClicked : upvoteArrow} alt="Upvote" className="w-7 h-7"/>
                <p className="text-sm">{upVoteNbr}</p>
            </div>
            <div className="flex flex-col bg-white w-45.3 drop-shadow-md ml-6">
                <h2 className="self-start pt-7 pl-7 font-bold text-lg">{title}</h2>
                <p className="self-start pt-3 pl-7 font-normal text-xs text-black text-opacity-40">{nbrComments + (nbrComments === 1 ? " comment" : " comments") }</p>
                <p className="self-end pr-7 pb-7 font-normal text-xs text-black text-opacity-40">Submitted by <span
                    className={(userName.toLowerCase() === "anonymous" ? "text-black text-opacity-40 " :  "text-mainOrange ") + "text-opacity-100 font-bold"}>{userName}</span></p>
            </div>
        </div>
    );
}

export default Post;