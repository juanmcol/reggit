export default function Post({post}) {
    return (
        <div key={post.id}>
            <p>{post.community} - {post.postTime} hr. ago</p>
            <h3>{post.title}</h3>
            <div>
                <h4>{post.upvotes} upvotes</h4>
                <img src={post.img} alt="post-image"/>
            </div>
            <div>
                <p>{post.comments.length} comments</p>
                <p>by {post.user}</p>
            </div>
        </div>
    )
}