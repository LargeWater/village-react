import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Wood from './components/wood';
import Villager from './components/villager';
import House from './components/house';

function App() {
  
  return (
    <div className="App">
      <h1>
        village
      </h1>
      <h2>
        a game about a village
      </h2>
      <h2>
        WARNING: refreshing or exiting the page will reset your counts, be very careful...
      </h2>
      <Villager />
      <Wood />
      <House />
    </div>
  );
}

export default App;
