export default function Post({post}) {
    const time = Date.now() / 1000;
    return (
        <div className="post" key={post.id}>
            <div className="header">
                <p className="creation">r/{post.subreddit} - {Math.floor((time - post.created)/3600)} hr. ago</p>
                <h3 className="title">{post.title}</h3>
            </div>
            <div className="content">
                {post.post_hint === "image" && <img src={post.url} alt={`${post.title}`}/>}
                {post.post_hint === "hosted:video" && <video controls width="400" height="400" src={post.secure_media.reddit_video.fallback_url}></video>}
            </div>
            <div className="details">
                <p className="upvotes">{post.ups} upvotes</p>
                <p className="comments">{post.num_comments} comments</p>
                <p className="author">by {post.author}</p>
            </div>
        </div>
    )
}