import React from 'react';
import Header from './components/Header'
import About from './components/About'
import Intro from './components/Intro'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PortfolioData from "./assets/portfolioData"

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Skills />
      <Portfolio portfolio={PortfolioData}/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
