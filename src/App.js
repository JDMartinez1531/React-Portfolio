import React from 'react';
import './App.css';
import Header from './components/Header'
import About from './components/About'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
