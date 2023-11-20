import React from "react";
import { Link } from "react-router-dom";
import {
  BsBox,
  BsFillEnvelopeFill,
  BsCurrencyDollar,
  BsArrowRightCircle,
} from "react-icons/bs";
import "../Shipping.css";

const Shipping = () => {
  return (
    <div className="shipping-card-container">
      <Link to="/get-quote" className="shipping-card">
        <BsCurrencyDollar className="icon" />
        <Link to="/get-quote">
          <h6>Get a Quote</h6>
        </Link>
      </Link>
      <div className="shipping-card">
        <Link to="/create-shipment" className="shipping-card">
          <BsFillEnvelopeFill className="icon" />
          <Link to="/create-shipment">
            <h6>Create shipment</h6>
          </Link>
        </Link>
      </div>
      <div className="shipping-card">
        <BsBox className="icon" />
        <Link to="/my-shipments">
          <h6>My Shipments</h6>
        </Link>
      </div>
      <div className="shipping-card">
        <Link to="/track-shipment" className="shipping-card">
          <BsArrowRightCircle className="icon" />
          <Link to="/track-shipment">
            <h6>Track my Shipment</h6>
          </Link>
        </Link>
      </div>
    </div>
  );
};

export default Shipping;
