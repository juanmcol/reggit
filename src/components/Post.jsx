export default function Post({post}) {
    const time = Date.now() / 1000;
    return (
        <div key={post.id}>
            <p>r/{post.subreddit} - {Math.floor((time - post.created)/3600)} hr. ago</p>
            <h3>{post.title}</h3>
            <div>
                <h4>{post.ups} upvotes</h4>
                {post.post_hint === "image" && <img src={post.url} alt={`${post.title}`}/>}
                {post.post_hint === "hosted:video" && <video controls width="400" height="400" src={post.secure_media.reddit_video.fallback_url}></video>}
            </div>
            <div>
                <p>{post.num_comments} comments</p>
                <p>by {post.author}</p>
            </div>
            <hr></hr>
        </div>
    )
}