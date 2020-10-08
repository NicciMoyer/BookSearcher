import React from "react"; 
import "./style.css"

function NavBar () {
    return ( 
        <div className="topnav">
        <a class="active" href="#home">Book Search</a>
        <a href="./search">Search</a>
        <a href="./app">Saved</a>
        
      </div>
        )
}
 export default NavBar;
