import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Result from "./components/resultsContainer/resultsContainer";
import SearchBar from "./components/searchContainer/searchContainer";
import NavBar from "./components/NavBar/navbar"

function Search() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Header></Header>
      <SearchBar></SearchBar>
      <Result></Result>
    </div>
  );
}

export default Search;