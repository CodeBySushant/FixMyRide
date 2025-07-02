// src/App.js
import React from 'react';
import ServicesList from './components/ServicesList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to FixMyRide Garage</h1>
      </header>
      <main>
        <ServicesList />
      </main>
    </div>
  );
}

export default App;
