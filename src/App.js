import React from 'react';
import './App.css';
import Header from './components/Header'
import About from './components/About'
import Intro from './components/Intro'

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
    </div>
  );
}

export default App;
