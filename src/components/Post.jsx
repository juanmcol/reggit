export default function Post({post}) {
    const time = Date.now() / 1000;
    return (
        <div className="post" key={post.id}>
            <div className="header">
                <div className="info-container">
                    <p className="creation">r/{post.subreddit} - {Math.floor((time - post.created)/3600)} hr. ago</p>
                    <p className="author">by {post.author}</p>
                </div>
                <h3 className="title">{post.title}</h3>
            </div>
            <div className="content">
                {post.post_hint === "image" && <img src={post.url} alt={`${post.title}`}/>}
                {post.post_hint === "hosted:video" && <video controls width="400" height="400" src={post.secure_media.reddit_video.fallback_url}></video>}
            </div>
            <div className="details">
                <div className="upvotes-container">
                    <div className="upvote-icon">
                        <i className="upvote-arrow" aria-label="upvote"></i>
                        <i className="upvote-square" aria-label="upvote"></i>
                    </div>
                    <p className="upvote-count">{post.ups}</p>
                    <div className="downvote-icon">
                        <i className="downvote-square" aria-label="downvote"></i>
                        <i className="downvote-arrow" aria-label="downvote"></i>
                    </div>
                </div>
                <div className="comments-container">
                    <div className="comment-icon">
                        <i className="comment-bubble" aria-label="comments"></i>
                        <i className="comment-arrow" aria-label="comments"></i>
                    </div>
                    <p className="comments">{post.num_comments}</p>
                </div>
            </div>
        </div>
    )
}