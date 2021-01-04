import React from 'react';
import Navbar from './component/Navbar';
import Categorie from './component/categorie';
import Membres from './component/Membres';
import Serviceclient from './component/Seviceclient';
import Apropos from './component/Apropos';
import Offre from './component/Offre';
import Herosection from './component/Herosection';
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Categorie/>
    <Membres/>
    <Serviceclient/>
    <Apropos/>
    <Offre/>
    <Herosection/>
    </div>
  );
}

export default App;
