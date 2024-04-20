//search.jsx

import React from "react";
import "./search.css";
import PostList from "./users";

function Search(){
    return (
        <>
        <div className="search-div">
        <input type="text" placeholder="Find Users" className="search-text" />
        </div>
       <span class="material-symbols-outlined">
search
</span> 
<div className="user-container">
<PostList/>
<p className="title">Filter by author</p>
        </div>
        
        </>
    );
    }


    export default Search;