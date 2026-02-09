import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import FAQ from './components/FAQ';
import Members from './components/Members';
import SubExec from './components/ExecSubMembers';
import Home from './components/Home';
import About from './components/About';
import Join from './components/Join';
import Footer from './components/Footer';
import Consultants from './components/Consultants';
import Contact from './components/Contact';
import ForClients from './components/ForClients';
import ForStudents from './components/ForStudents';
import NotFound from './components/404';

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
            <Route path="/about/programs" element={<Navigate to="/for-students#programs" replace />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/members" element={<Navigate to="/members/executive-team" replace />} />
            <Route path="/members/executive-team" element={<Members />} />
            <Route path="/members/exec-subteams" element={<SubExec />} />
            <Route path="/members/consultants" element={<Consultants />} />
            <Route path="/join" element={<Join />} />
            <Route path="/services" element={<Navigate to="/for-clients#services" replace />} />
            <Route path="/about/subteams" element={<Navigate to="/for-students#subteams" replace />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/for-clients" element={<ForClients />} />
            <Route path="/for-students" element={<ForStudents />} />
            <Route path="*" element={<NotFound />} />
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
