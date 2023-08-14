import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ParcelTracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [parcelInfo, setParcelInfo] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const jwtToken = localStorage.getItem("jwtToken");

  const handleTrackParcel = async () => {
    try {
      const response = await fetch(`/parcels/${trackingNumber}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setParcelInfo(data);
        setErrorMsg(null);
      } else {
        const errorData = await response.json();
        setParcelInfo(null);
        setErrorMsg(errorData.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelParcel = async () => {
    // Check if user is authenticated
    if (!jwtToken) {
      setErrorMsg("You must be logged in to cancel a parcel.");
      return;
    }

    if (parcelInfo && parcelInfo.status === "pending") {
      try {
        const response = await fetch(`/parcels/${parcelInfo.id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          // Handle successful cancellation, e.g., show a confirmation message
          setParcelInfo(null);
        } else {
          const errorData = await response.json();
          setErrorMsg(errorData.error);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div id="parcel-tracking">
      <h2>Parcel Tracking</h2>
      <Form>
        <Form.Group controlId="trackingNumber">
          <Form.Label>Enter Tracking Number:</Form.Label>
          <Form.Control
            type="text"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
          />
        </Form.Group>
        <Button onClick={handleTrackParcel}>Track Parcel</Button>
      </Form>
      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
      {parcelInfo && (
        <div id="parcel-info">
          <h3>Parcel Information</h3>
          <div id="p-row">
            <div id="parcel-row">
              <p>Parcel ID: {parcelInfo.id}</p>
              <p>Receiver's Name: {parcelInfo.receiver_name}</p>
              <p>Receiver's address: {parcelInfo.receiver_address}</p>
              <p>Receiver's country: {parcelInfo.receiver_country}</p>
              <p>Status: {parcelInfo.status}</p>
            </div>
          </div>
          <button
            style={{ backgroundColor: "red" }}
            onClick={handleCancelParcel}
            disabled={parcelInfo.status !== "pending"}
          >
            Cancel Parcel
          </button>
        </div>
      )}
    </div>
  );
};

export default ParcelTracking;
