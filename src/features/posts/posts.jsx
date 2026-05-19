import { useDispatch, useSelector } from "react-redux"
import { selectPostsData, selectPostsPopular, selectPostsDataFiltered, loadDummyPosts, filterPosts, loadPopular } from "./postsSlice";
import { selectSearchBarQuery } from "../searchBar/searchBarSlice";
import { useEffect } from "react";
import Post from "../../components/Post";

export const Posts = () => {
    const posts = useSelector(selectPostsData);
    const popular = useSelector(selectPostsPopular);
    const postsFiltered = useSelector(selectPostsDataFiltered);
    const query = useSelector(selectSearchBarQuery);
    const dispatch = useDispatch();

    /* useEffect(() => {
        dispatch(filterPosts(query));
    }, [query]); */

    const onFirstRender = () => {
        // dispatch(loadDummyPosts());
        dispatch(loadPopular());
    }
    useEffect(onFirstRender, []);

    return (
        <div id="posts-container">
            <h2>Posts</h2>
            {true ? popular.map((post) => (
                <Post post={post} key={post.id}/>
            )) : postsFiltered.map((post) => (
                <Post post={post} key={post.id}/>
            )) }
        </div>
    )
}