import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import UpdateDestination from "./UpdateDestination";

const ParcelDetails = () => {
  const [parcels, setParcels] = useState([]);

  const calculateCost = (weight) => {
    const costPerUnitWeight = 2; // Change this value as needed
    return weight * costPerUnitWeight;
  };

  // Fetch all parcels associated with the current user
  const fetchParcels = async () => {
    try {
      const response = await fetch("/parcels", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch parcels");
      }
      const data = await response.json();
      setParcels(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Call fetchParcels function to fetch parcels on component mount
    fetchParcels();
  }, []);

  const handleUpdateDestination = async (updatedParcel) => {
    try {
      // Make a PUT request to update the parcel destination
      const response = await fetch(`/parcels/${updatedParcel.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
        body: JSON.stringify({
          parcel: {
            receiver_name: updatedParcel.receiver_name,
            receiver_email: updatedParcel.receiver_email,
            receiver_address: updatedParcel.receiver_address,
            receiver_country: updatedParcel.receiver_country,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update parcel destination");
      }

      console.log("Parcel destination updated successfully");
      // Handle success response, e.g., show a success message or update the state
      fetchParcels(); // Refresh the parcel data after successful update
    } catch (error) {
      console.error("Error updating parcel destination:", error);
      // Handle error response, e.g., show an error message to the user
    }
  };

  return (
    <div id="parcel-details">
      <h2>My Shipments</h2>
      {parcels.length === 0 ? (
        <p>No parcels found.</p>
      ) : (
        <Table className="table table-primary" striped bordered hover>
          <thead>
            <tr>
              <th>Parcel ID</th>
              <th>Receiver's Name</th>
              <th>Receiver's Email</th>
              <th>Receiver's Address</th>
              <th>Receiver's Country</th>
              <th>Parcel Weight</th>
              <th>Type of Shipment</th>
              <th>Cost of Sending</th> {/* Add this column */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel) => (
              <tr key={parcel.id}>
                <td>{parcel.id}</td>
                <td>{parcel.receiver_name}</td>
                <td>{parcel.receiver_email}</td>
                <td>{parcel.receiver_address}</td>
                <td>{parcel.receiver_country}</td>
                <td>{parcel.weight}</td>
                <td>{parcel.type_of_shipment}</td>
                <td>${calculateCost(parcel.weight)}</td>{" "}
                {/* Display the cost here */}
                <td>
                  <UpdateDestination
                    parcel={parcel}
                    onUpdateDestination={handleUpdateDestination}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default ParcelDetails;

// import React, { useState, useEffect } from 'react';
// import { Table } from 'react-bootstrap';
// import UpdateDestination from './UpdateDestination';

// const ParcelDetails = () => {
//   const [parcels, setParcels] = useState([]);

//   // Fetch all parcels associated with the current user
//   const fetchParcels = async () => {
//     try {
//       const response = await fetch('/parcels', {
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
//         },
//       });
//       if (!response.ok) {
//         throw new Error('Failed to fetch parcels');
//       }
//       const data = await response.json();
//       setParcels(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     // Call fetchParcels function to fetch parcels on component mount
//     fetchParcels();
//   }, []);

//   const handleUpdateDestination = async (updatedParcel) => {
//     try {
//       // Make a PUT request to update the parcel destination
//       const response = await fetch(`/parcels/${updatedParcel.id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
//         },
//         body: JSON.stringify({
//           parcel: {
//             receiver_name: updatedParcel.receiver_name,
//             receiver_email: updatedParcel.receiver_email,
//             receiver_address: updatedParcel.receiver_address,
//           },
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to update parcel destination');
//       }

//       console.log('Parcel destination updated successfully');
//       // Handle success response, e.g., show a success message or update the state
//       fetchParcels(); // Refresh the parcel data after successful update
//     } catch (error) {
//       console.error('Error updating parcel destination:', error);
//       // Handle error response, e.g., show an error message to the user
//     }
//   };

//   return (
//     <div>
//       <h2>My Shipments</h2>
//       {parcels.length === 0 ? (
//         <p>No parcels found.</p>
//       ) : (
//         <Table className="table table-primary" striped bordered hover>
//           <thead>
//             <tr>
//               <th>Parcel ID</th>
//               <th>Receiver's Name</th>
//               <th>Receiver's Email</th>
//               <th>Receiver's Address</th>
//               <th>Receiver's Country</th>
//               <th>Parcel Weight</th>
//               <th>Type of Shipment</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {parcels.map((parcel) => (
//               <tr key={parcel.id}>
//                 <td>{parcel.id}</td>
//                 <td>{parcel.receiver_name}</td>
//                 <td>{parcel.receiver_email}</td>
//                 <td>{parcel.receiver_address}</td>
//                 <td>{parcel.receiver_country}</td>
//                 <td>{parcel.weight}</td>
//                 <td>{parcel.type_of_shipment}</td>
//                 <td>
//                   {/* Render the UpdateDestination component for each parcel */}
//                   <UpdateDestination parcel={parcel} onUpdateDestination={handleUpdateDestination} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}
//     </div>
//   );
// };

// export default ParcelDetails;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Table } from 'react-bootstrap';

// const ParcelDetails = () => {
//   const [parcels, setParcels] = useState([]);

//   useEffect(() => {
//     // Fetch all parcels associated with the current user
//     const fetchParcels = async () => {
//       try {
//         const response = await fetch('/parcels', {
//           headers: {
//             'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
//           },
//         });
//         if (!response.ok) {
//           throw new Error('Failed to fetch parcels');
//         }
//         const data = await response.json();
//         setParcels(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchParcels();
//   }, []);

//   return (
//     <div>
//       <h2>My Shipments</h2>
//       {parcels.length === 0 ? (
//         <p>No parcels found.</p>
//       ) : (
//         <Table  class="table table-primary"striped bordered hover>
//           <thead>
//             <tr>
//               <th>Parcel ID</th>

//               <th>Receiver's Name</th>
//               <th>Receiver's email</th>
//               <th>Receiver's address</th>
//               <th>Receiver's country</th>
//               <th>Parcel weight</th>
//               <th>Type of shipment</th>

//               {/* Add more table headers for additional parcel details */}

//             </tr>
//           </thead>
//           <tbody>
//             {parcels.map((parcel) => (
//               <tr key={parcel.id}>
//                 <td>{parcel.id}</td>

//                 <td>{parcel.receiver_name}</td>
//                 <td>{parcel.receiver_email}</td>
//                 <td>{parcel.receiver_address}</td>
//                 <td>{parcel.receiver_country}</td>
//                 <td>{parcel.weight}</td>
//                 <td>{parcel.type_of_shipment}</td>

//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}
//     </div>

//   );
// };

// export default ParcelDetails;
