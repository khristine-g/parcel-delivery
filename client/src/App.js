import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Tracking from "./components/Tracking";
import Services from "./components/Services";
import About from "./components/About";
import Advantages from "./components/Advantages";
import Parcel from "./components/Parcel";
import Shipping from "./components/Shipping";
import Quote from "./components/Quote";
import ShipmentTracking from "./components/ShipmentTracking";

import SignupPage from "./components/signup/Signup";

import LoginPage from "./components/login/Login";
import UpdateDestination from "./components/UpdateDestination";
import ParcelDetails from "./components/ParcelDetails";
import AdminDashboard from "./components/AdminDashboard";
import ParcelTracking from "./components/ParcelTracking";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/parcel" element={<Parcel />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/tracking" element={<Tracking />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/shipping" element={<Shipping />} />
        <Route exact path="/get-quote" element={<Quote />} />
        <Route exact path="/create-shipment" element={<Parcel />} />
        <Route
          exact
          path="/update-destination"
          element={<UpdateDestination />}
        />
        {/* <Route exact path="/track-shipment" element={<ShipmentTracking />} /> */}
        <Route exact path="/track-shipment" element={<ParcelTracking />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<SignupPage />} />

        <Route path="/my-shipments/:id" element={<ParcelDetails />} />
        <Route exact path="/my-shipments" element={<ParcelDetails />} />
        <Route exact path="/admin" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
