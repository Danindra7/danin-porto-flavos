import React, { useState } from 'react'
import './App.css';
import Card from './Components/Card';
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import { CardData } from './Data/CardData';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <HeroSection></HeroSection>

      <div className="content">
        {/* <div className="our-menu">
          <div className="img-container">
            <img className="menu-img" src="/images/gudeg-topView.jpg"></img>
          </div>
        </div> */}
      </div>

      <Footer />


    </div>
  );
}

export default App;
