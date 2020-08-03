import React from 'react';
import './App.css';
import Nav from './components/nav'
import Landing from './components/landing'
import Misson from './components/mission'
function App() {
  return (
    <div className="App">
     <Nav/>
     <Landing/>
     <Misson/>
    </div>
  );
}

export default App;
