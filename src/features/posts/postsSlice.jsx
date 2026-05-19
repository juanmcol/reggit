import { createAsyncThunk, createSlice, isPending, isRejected } from "@reduxjs/toolkit";
import { dummyData } from "../../API/dummyData";
import { redditAPI } from "../../API/RedditJSON_API";

const redditPopular = redditAPI.fetchPopular();

export const loadPopular = createAsyncThunk(
    'posts/loadPopular',
    redditAPI.fetchPopular
)

const initialState = {
    data: [],
    popular: [],
    filteredData: [],
    isLoading: false,
    hasError: false
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        loadDummyPosts: (state) => {
            state.data = dummyData;
        },
        filterPosts: (state, action) => {
            state.filteredData = state.data.filter((post) => post.title.includes(action.payload));
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadPopular.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasError = false;
                state.popular = action.payload;
            })
            .addMatcher(isPending, (state) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addMatcher(isRejected, (state) => {
                state.isLoading = false;
                state.hasError = true;
            })
    }
})

export const { loadDummyPosts, filterPosts } = postsSlice.actions;
export default postsSlice.reducer;
export const selectPostsData = (state) => state.posts.data;
export const selectPostsPopular = (state) => state.posts.popular;
export const selectPostsDataFiltered = (state) => state.posts.filteredData;