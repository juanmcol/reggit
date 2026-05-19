import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    query: ''
};

const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.query = action.payload;
        },
    }
})

export const { setSearch } = searchBarSlice.actions;
export default searchBarSlice.reducer;
export const selectSearchBarQuery = (state) => state.searchBar.query;