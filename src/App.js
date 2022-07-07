import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Wood from './components/wood';
import Villager from './components/villager';
import House from './components/house';

function App() {
  return (
    <div className="App">
      <Villager />
    </div>
  );
}

export default App;
