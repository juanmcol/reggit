import { useDispatch, useSelector } from "react-redux"
import { selectPostsPopular, selectPostsSearch, loadPopular, loadSearch } from "./postsSlice";
import { selectSearchBarQuery } from "../searchBar/searchBarSlice";
import { useEffect } from "react";
import Post from "../../components/Post";

export const Posts = () => {
    const popular = useSelector(selectPostsPopular);
    const search = useSelector(selectPostsSearch);
    const query = useSelector(selectSearchBarQuery);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadSearch(query));
    }, [query]);

    const onFirstRender = () => {
        dispatch(loadPopular());
    }
    useEffect(onFirstRender, []);

    return (
        <div id="posts-container">
            {query === "" ? popular.map((post) => (
                <div>
                    <hr />
                    <Post post={post} key={post.id}/>
                    <hr />
                </div>
            )) : search.map((post) => (
                <div>
                    <hr />
                    <Post post={post} key={post.id}/>
                    <hr />
                </div>
            )) }
        </div>
    )
}