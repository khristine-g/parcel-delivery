import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Tracking from './components/Tracking';
import Services from './components/Services';
import About from './components/About';
import Advantages from './components/Advantages';
import Parcel from './components/Parcel';
import Shipping from './components/Shipping';
import Quote from './components/Quote';
import ShipmentTracking from './components/ShipmentTracking';
import Footer from "./components/footer/footer";
import SignupPage from "./components/signup/Signup";

import LoginPage from "./components/login/Login";

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
        <Navbar />
        
          <Route path="/" element={<Home />} />
          <Route path="/parcel" element={<Parcel />} />
          <Route path="/about" element={<About />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/services" element={<Services />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/get-quote" element={<Quote />} />
          <Route path="/create-shipment" element={<Parcel />} />
          <Route path="/track-shipment" element={<ShipmentTracking />} />
          <Route exact path="/">
        <Footer />
      </Route>
      <Route exact path="/">
        <LoginPage />
      </Route>
      <Route path="/register">
        <SignupPage />
      </Route>
        
        <Shipping/>
        <Advantages />
        <Services />
        <Tracking />
        <About />
      

    </div>
  );
}

export default App;
