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

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parcel" element={<Parcel />} />
          <Route path="/about" element={<About />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/services" element={<Services />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/get-quote" element={<Quote />} />
          <Route path="/create-shipment" element={<Parcel />} />
          <Route path="/track-shipment" element={<ShipmentTracking />} />
        </Routes>
        <Shipping/>
        <Advantages />
        <Services />
        <Tracking />
        <About />
      </Router>
    </div>
  );
}

export default App;
