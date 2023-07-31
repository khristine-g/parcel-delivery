

import React from 'react';
import '../Tracking.css';

const Tracking = () => {
  return (
    <div className="tracking-container">
      <div className="image-container">
        <img src="https://www.opparcel.com/slider/big_img/ad39ea70cce836d2c8041807d3bbc3be.jpeg" alt="parcel delivery means" />
      </div>
      <div className="info-container">
      <h2 style={{ color: '#333', marginBottom: '20px'}}>Tracking Your Freight</h2>
        <p style={{color: '#333'}}>Whether you require distribution or fulfillment, defined freight
          forwarding,<br></br> or a complete supply chain solution, Translogic can
          provide you with a customized solution tailored to your needs.
          We aprreciate the trust of our clients!Whether you require distribution or fulfillment, defined freight
          forwarding,<br></br> or a complete supply chain solution, Translogic can
          provide you with a customized solution tailored to your needs.
          We aprreciate the trust of our clients!</p>
          <button>Track Freight </button> 
      </div>
    </div>
  );
};

export default Tracking;
