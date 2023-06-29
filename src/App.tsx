import React from 'react';
import './App.css';
import { ToDo } from './components/ToDo';
import { Login } from './components/Login';
import { FormRegister } from './components/FormRegister';
import { ContainerLobby } from './components/ContainerLobby';

function App() {
  return (
    <div className="App">
      <ContainerLobby>{<Login/>}</ContainerLobby>
    </div>
  );
}

export default App;
