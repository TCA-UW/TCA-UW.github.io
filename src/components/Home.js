import React from 'react';
import '../css/Home.css';
import Banner from '../components/Banner'

const Home = () => {
  return (
    
    <div className="home-container">
      <header className="Text-block">
        <Banner />
        <h1>Technology Consulting Association</h1>
        <p>At the University of Washington</p>
      </header>
    </div>
  );
};

export default Home;
