// CardComponent.js
import React from 'react';
import { Link } from 'react-router-dom';
import { BsBox, BsFillEnvelopeFill, BsCurrencyDollar , BsArrowRightCircle } from 'react-icons/bs';
import '../Shipping.css';

const Shipping = () => {
  return (
    <div className="shipping-card-container">
     <Link to="/get-quote" className="shipping-card">
        <BsCurrencyDollar className="icon" />
        <h1>Get a Quote</h1>
      </Link>
      <div className="shipping-card">
      <Link to="/create-shipment" className="shipping-card">
        <BsFillEnvelopeFill className="icon" />
        <h1>Create shipment</h1>
        </Link>
      </div>
      <div className="shipping-card">
        <BsBox  className="icon" />
        <h1>My Shipments</h1>
      </div>
      <div className="shipping-card">
      <Link  to="/track-shipment" className="shipping-card"> 
        <BsArrowRightCircle className="icon" />
        <h1>Track my Shipment</h1>
        </Link>
      </div>
    </div>
  );
};

export default Shipping;
