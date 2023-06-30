import React from 'react';
import { Router } from './Router';
import './App.css';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router/>
      </AuthProvider>
    </div>
  );
}

export default App;
