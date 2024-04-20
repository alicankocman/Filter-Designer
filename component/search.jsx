import React, { useState } from "react";
import "./search.css";
import PostList from "./users";

function Search(){
    const [searchText, setSearchText] = useState("");

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    };

    return (
        <>
        <div className="search-div">
            <input 
                type="text" 
                className="search-text" 
                value={searchText} 
                onChange={handleInputChange} 
            />
        </div>
        <span className="material-symbols-outlined">search</span> 
        <div className="user-container">
            <PostList searchText={searchText} />
            <p className="title">Filter by author</p>
        </div>
        </>
    );
}

export default Search;
