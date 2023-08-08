<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useState } from 'react';
import '../ShipmentTracking.css';
>>>>>>> ea4b4f6d2762ad2cfcc9d785463b0602975e9509

const ShipmentTracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [shipmentData, setShipmentData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newDestination, setNewDestination] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/v1/shipments/${trackingNumber}`);
      if (!response.ok) {
        throw new Error("Shipment not found");
      }
      const data = await response.json();
      setShipmentData(data);
    } catch (error) {
      console.error(error);
      setError("Shipment not found");
      setShipmentData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelParcel = async () => {
<<<<<<< HEAD
    try {
      // Make the API request to cancel the parcel
      const response = await fetch(
        `/api/v1/shipments/${trackingNumber}/cancel`,
        {
          method: "POST", // Use the appropriate HTTP method (POST, PUT, DELETE, etc.)
          headers: {
            "Content-Type": "application/json",
          },
          // Optionally, you can send data in the request body (if required by your API)
          // body: JSON.stringify({}),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to cancel the parcel");
      }

      // Handle the successful response (if needed)
      console.log("Parcel cancelled successfully");
    } catch (error) {
      console.error(error);
      setError("Failed to cancel the parcel");
    }
=======
    // ... Remaining code for handleCancelParcel function
>>>>>>> ea4b4f6d2762ad2cfcc9d785463b0602975e9509
  };

  const handleDestinationChange = (e) => {
    setNewDestination(e.target.value);
  };

  const handleChangeDestination = async () => {
<<<<<<< HEAD
    try {
      // Make the API request to change the destination of the parcel
      const response = await fetch(
        `/api/v1/shipments/${trackingNumber}/change-destination`,
        {
          method: "POST", // Use the appropriate HTTP method (POST, PUT, DELETE, etc.)
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            destination: newDestination,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to change the destination");
      }

      // Handle the successful response (if needed)
      console.log("Destination changed successfully:", newDestination);
    } catch (error) {
      console.error(error);
      setError("Failed to change the destination");
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
=======
    // ... Remaining code for handleChangeDestination function
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleFormSubmit} className="search-form">
>>>>>>> ea4b4f6d2762ad2cfcc9d785463b0602975e9509
        <input
          type="text"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
<<<<<<< HEAD
        />
        <button type="submit">Track Shipment</button>
=======
          placeholder="Enter tracking number"
          className="search-input"
        />
        <button type="submit" className="search-button">
          Track Shipment
        </button>
>>>>>>> ea4b4f6d2762ad2cfcc9d785463b0602975e9509
      </form>
      {isLoading && <p>Loading...</p>}
      {!error ? (
        <p>{error}</p>
      ) : (
        <section id="receipt-section">
          <div id="receipt">
            <div className="receipt-row">
              <div>Origin</div>
              <div>Package</div>
              <div>Status</div>
              <div>Type of shipment</div>
            </div>
            <div className="receipt-row">
              <div>Weight</div>
              <div>Carrier ref No</div>
              <div>departure time</div>
              <div>Arrival time</div>
            </div>
          </div>
        </section>
      )}
      {shipmentData && (
        <div>
<<<<<<< HEAD
          <p>Status: {shipmentData.status}</p>
          <p>Delivery Date: {shipmentData.delivery_date}</p>
          {/* Display other shipment details as needed */}
          <button onClick={handleCancelParcel}>Cancel Parcel</button>
          <div>
            <label htmlFor="destination">Change Destination:</label>
            <select
              id="destination"
              value={newDestination}
              onChange={handleDestinationChange}
            >
              <option value="destination1">Destination 1</option>
              <option value="destination2">Destination 2</option>
              <option value="destination3">Destination 3</option>
              {/* Add more destination options as needed */}
            </select>
            <button onClick={handleChangeDestination}>
              Change Destination
            </button>
          </div>
=======
          {/* ... Remaining code for displaying shipment data */}
>>>>>>> ea4b4f6d2762ad2cfcc9d785463b0602975e9509
        </div>
      )}
    </div>
  );
};

export default ShipmentTracking;

// import React, { useState } from 'react';

// const ShipmentTracking = () => {
//   const [trackingNumber, setTrackingNumber] = useState('');
//   const [shipmentData, setShipmentData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError(null);

//     try {
//       const response = await fetch(`/api/v1/shipments/${trackingNumber}`);
//       if (!response.ok) {
//         throw new Error('Shipment not found');
//       }
//       const data = await response.json();
//       setShipmentData(data);
//     } catch (error) {
//       console.error(error);
//       setError('Shipment not found');
//       setShipmentData(null);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleFormSubmit}>
//         <input type="text" value={trackingNumber} onChange={(e) => setTrackingNumber(e.target.value)} />
//         <button type="submit">Track Shipment</button>
//       </form>
//       {isLoading && <p>Loading...</p>}
//       {error && <p>{error}</p>}
//       {shipmentData && (
//         <div>
//           <p>Status: {shipmentData.status}</p>
//           <p>Delivery Date: {shipmentData.delivery_date}</p>
//           {/* Display other shipment details as needed */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShipmentTracking;
