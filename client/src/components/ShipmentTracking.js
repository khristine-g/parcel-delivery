// import React, { useState } from "react";
// import "../ShipmentTracking.css";

// const ShipmentTracking = () => {
//   const [trackingNumber, setTrackingNumber] = useState("");
//   const [shipmentData, setShipmentData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [newDestination, setNewDestination] = useState("");

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError(null);

//     try {
//       const response = await fetch(`/api/v1/shipments/${trackingNumber}`);
//       if (!response.ok) {
//         throw new Error("Shipment not found");
//       }
//       const data = await response.json();
//       setShipmentData(data);
//     } catch (error) {
//       console.error(error);
//       setError("Shipment not found");
//       setShipmentData(null);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleCancelParcel = async () => {
//     // ... Remaining code for handleCancelParcel function
//   };

//   const handleDestinationChange = (e) => {
//     setNewDestination(e.target.value);
//   };

//   const handleChangeDestination = async () => {
//     // ... Remaining code for handleChangeDestination function
//   };

//   return (
//     <div className="search-bar-container">
//       <form onSubmit={handleFormSubmit} className="search-form">
//         <input
//           type="text"
//           value={trackingNumber}
//           onChange={(e) => setTrackingNumber(e.target.value)}
//           placeholder="Enter tracking number"
//           className="search-input"
//         />
//         <button type="submit" className="search-button">
//           Track Shipment
//         </button>

//         {isLoading && <p>Loading...</p>}
//         {!error ? (
//           <p>{error}</p>
//         ) : (
//           <section id="receipt-section">
//             <div id="receipt">
//               <div className="receipt-row">
//                 <div>Origin</div>
//                 <div>Package</div>
//                 <div>Status</div>
//                 <div>Type of shipment</div>
//               </div>
//               <div className="receipt-row">
//                 <div>Weight</div>
//                 <div>Carrier ref No</div>
//                 <div>departure time</div>
//                 <div>Arrival time</div>
//               </div>
//             </div>
//           </section>
//         )}
//         {shipmentData && (
//           <div>{/* ... Remaining code for displaying shipment data */}</div>
//         )}
//       </form>
//     </div>
//   );
// };

// export default ShipmentTracking;

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
