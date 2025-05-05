import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import FAQ from './components/FAQ';
import Members from './components/Members';
import Home from './components/Home';
import About from './components/About';
import Join from './components/Join';
import Footer from './components/Footer';
import Services from './components/Services';
import Subteams from './components/Subteams';
import Consultants from './components/Consultants';

function App() {
  return (
    <Router>
      <div className="App-container">
        <header className="Navigation-bar">
          <Header />
        </header>
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/members" element={<Navigate to="/members/executive-team" replace />} />
            <Route path="/members/executive-team" element={<Members />} />
            <Route path="/members/consultants" element={<Consultants />} />
            <Route path="/join" element={<Join />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about/subteams" element={<Subteams />} />
          </Routes>
        </main>
        <footer className="Footer">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
