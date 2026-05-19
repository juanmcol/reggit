import { createSlice } from "@reduxjs/toolkit";
import { dummyData } from "../../API/dummyData";

const initialState = {
    data: [],
    filteredData: []
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        loadPosts: (state) => {
            state.data = dummyData;
        },
        filterPosts: (state, action) => {
            state.filteredData = state.data.filter((post) => post.title.includes(action.payload));
        },
    }
})

export const { loadPosts, filterPosts } = postsSlice.actions;
export default postsSlice.reducer;
export const selectPostsData = (state) => state.posts.data;
export const selectPostsDataFiltered = (state) => state.posts.filteredData;