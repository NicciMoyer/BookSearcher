import React from "react"; 
import "./style.css";

function SearchBar () {
    return ( 
        <div className = "searchContainer">
        <h3> Search for a book:</h3>
        <input className = "searchBar" placeholder = "Name of your book"></input>
        </div>
        )
}
 export default SearchBar;
