import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { selectSearchBarQuery, setSearch } from "./searchBarSlice";

export const SearchBar = () => {
    const query = useSelector(selectSearchBarQuery);
    const dispatch = useDispatch();

    const [input, setInput] = useState("");

    const onQueryChangeHandler = (e) => {
        setInput(e.target.value);
    }

    const onClickSearchHandler = () => {
        dispatch(setSearch(input));
    }

    return (
        <div id="search-bar-container">
            <input
                id="search-bar"
                type="text"
                placeholder="search"
                onChange={onQueryChangeHandler}
            />
            <button
                id="search-button"
                type="button"
                onClick={onClickSearchHandler}
            >search</button>
        </div>
    )
}