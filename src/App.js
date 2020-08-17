import React from 'react';
import Header from './components/Header'
import About from './components/About'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PortfolioData from "./assets/portfolioData.json"

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Portfolio portfolio={PortfolioData}/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
