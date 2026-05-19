import { useDispatch, useSelector } from "react-redux"
import { selectPostsData, selectPostsDataFiltered, loadPosts, filterPosts } from "./postsSlice";
import { selectSearchBarQuery } from "../searchBar/searchBarSlice";
import { useEffect } from "react";
import Post from "../../components/Post";

export const Posts = () => {
    const posts = useSelector(selectPostsData);
    const postsFiltered = useSelector(selectPostsDataFiltered);
    const query = useSelector(selectSearchBarQuery);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filterPosts(query));
        console.log(query);
        console.log(filterPosts);
    }, [query]);

    const onFirstRender = () => {
        dispatch(loadPosts());
    }
    useEffect(onFirstRender, []);

    return (
        <div id="posts-container">
            <h2>Posts</h2>
            {query === '' ? posts.map((post) => (
                <Post post={post} key={post.id}/>
            )) : postsFiltered.map((post) => (
                <Post post={post} key={post.id}/>
            )) }
        </div>
    )
}