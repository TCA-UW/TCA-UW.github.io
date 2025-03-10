import './App.css';
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FAQ from './components/FAQ';
import Members from './components/Members'
import Home from './components/Home';
import About from './components/About';
import Join from './components/Join';
import Footer from './components/Footer';
import Services from './components/Services';

function App() {
  return (
    <Router>
      <div className="App-header">
        <header className="Navigation-bar">
          <Header />
          <div className="pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/members" element={<Members />} />
              <Route path="/join" element={<Join />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </div>
        </header>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
