import { useState } from "react";
import { FaRegHeart, FaRegComment, FaShare } from "react-icons/fa";

const PostCard = ({ post }) => {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleAddComment = () => {
        if (comment.trim() !== "") {
            setComments([...comments, comment]);
            setComment("");
        }
    };

    const { userName, userImage, postText, postImage } = post;

    return (
        <div className="post-card w-[530px] h-auto border" >
            {/* User Information */}
            <div className="user-info flex p-2 flex-row items-center gap-3">
                <img className="user-image w-9 h-9 rounded-full" src={userImage} alt={`${userName}'s profile`} />
                <span className="user-name text-xs">{userName}</span>
            </div>

            {/* Post Text */}
            <p className="post-text p-2">{postText}</p>

            {/* Post Image (if available) */}
            {postImage && <img className="post-image h-auto w-full" src={postImage} alt="Post" />}

            {/* Like, Comment, Share Buttons */}
            <div className="post-actions flex justify-between gap-0">
                <button className="action-button flex items-center gap-2">
                    <FaRegHeart /> Like
                </button>
                <button className="action-button flex items-center gap-2">
                    <FaRegComment /> Comment
                </button>
                <button className="action-button flex items-center gap-2">
                    <FaShare /> Share
                </button>
            </div>
            <hr />
            <div>
                <div className="user-info flex p-2 flex-row items-center gap-3">
                    <img className="user-image w-9 h-9 rounded-full" src={userImage} alt={`${userName}'s profile`} />
                    <div className="bg-slate-400 flex flex-col mt-2 p-1 rounded-md px-4">


                        <span className="user-name text-xs">{userName}</span>
                        <span>sir ami valo asi apnar ki obosrta a ki koren akon ? baris sonay kmn sase vgsf? ghfdg gav valo ase to?</span>

                    </div>
                </div>
            </div>
            {/* Comment Box */}
            <div className="comment-box relative ">
                <textarea
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={handleCommentChange}
                    className="w-full"
                />
                <button className="absolute " onClick={handleAddComment}>Post</button>
            </div>

            {/* Display Comments */}
            {comments.length > 0 && (
                <div className="comments">
                    <strong>Comments:</strong>
                    <ul>
                        {comments.map((comment, index) => (
                            <li key={index}>{comment}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

// Inline styles for the post card container

export default PostCard;
