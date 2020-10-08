import React from 'react';
import './App.css';
import Header from "../components/header/header";
import SavedBooks from "../components/savedBooks/savedBooks"
import NavBar from '../components/NavBar/navbar';


function Home() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Header></Header>
      <SavedBooks></SavedBooks>
    </div>
  );
}

export default Home;