import React from 'react';
import './global.css';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;
