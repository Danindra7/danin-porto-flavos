import React, { useState } from 'react'
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HowToOrder from './Pages/HowToOrder';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/how-to-order' exact component={HowToOrder} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
