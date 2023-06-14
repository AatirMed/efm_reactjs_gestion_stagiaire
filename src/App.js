import React, { useState } from 'react';
import './library/App.css';
import {  Route, Routes } from 'react-router';

// Page
import Details from './library/Page/Details';
import Home from './library/Page/Home';
import Ajouter from './library/Page/Ajouter';

function App() {
  const [stagiaire, setStagaire] = useState({
    image: "URL",
    nom: "AATIR",
    prenom: "Mohamed",
    filiere: "FS202"
  })

  return (
    <div className="App">
    
      <Routes>
      <Route path='/' element={<Home/>}  />
      <Route path='/:nom' element={<Details/>}  />
      <Route path='/add' element={<Ajouter/>}  />
      </Routes>
    </div>
  );
}

export default App;
