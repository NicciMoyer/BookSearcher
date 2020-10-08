import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/navbar"

function App() {
  return (
    <div className="App">
      <NavBar>
        <Switch>
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </NavBar>
    </div>
  );
}

export default App;
