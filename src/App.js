import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer.js';
import Navigation from './components/Navigation.js';
import Profile from './components/Profile.js';
import Projects from './components/Projects.js'

function App() {
  return (
    <div className="container">
      <div className = "wrap">
        <Navigation />
        <Projects/>
      </div>
      <Footer/>



    </div>
  );
}

export default App;
