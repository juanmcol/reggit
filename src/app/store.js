import { configureStore } from '@reduxjs/toolkit';
import searchBarReducer from '../features/searchBar/searchBarSlice';
import postsReducer from '../features/posts/postsSlice';

export const store = configureStore({
    reducer: {
        searchBar: searchBarReducer,
        posts: postsReducer,
    }
});