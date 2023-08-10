import React, { useState, useEffect } from 'react';
import { Table, Form, Button } from 'react-bootstrap';

const AdminDashboard = () => {
  const [parcels, setParcels] = useState([]);

  const fetchParcelsForAdmin = async () => {
    try {
      const response = await fetch('/parcels/admin_dashboard', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch parcels for admin dashboard');
      }

      const data = await response.json();
      setParcels(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchParcelsForAdmin();
  }, []);

  const updateParcelStatusAndLocation = async (parcelId, status, currentLocation) => {
    try {
      const response = await fetch(`/parcels/${parcelId}/update_status_and_location`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
        },
        body: JSON.stringify({
          status: status,
          current_location: currentLocation,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update parcel status and location');
      }

      const updatedParcelData = await response.json();
      console.log('Parcel status and location updated successfully');

      // Update the parcels array with the updated data
      const updatedParcels = parcels.map((parcel) =>
        parcel.id === parcelId
          ? { ...parcel, status: updatedParcelData.status, current_location: updatedParcelData.current_location }
          : parcel
      );

      setParcels(updatedParcels);
    } catch (error) {
      console.error('Error updating parcel status and location:', error);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {parcels.length === 0 ? (
        <p>No parcels found.</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              {/* <th>Parcel ID</th> */}
              <th>Sender's Name</th>
              <th>Sender's Email</th>
              <th>Sender's Address</th>
              <th>Receiver's Name</th>
              <th>Receiver's Email</th>
              <th>Receiver's Address</th>
              <th>Parcel Weight</th>
              <th>Type of Shipment</th>
              <th>Status</th>
              <th>Current Location</th>
              <th>New Status</th> {/* Add input field for new status */}
              <th>New Location</th> {/* Add input field for new location */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel) => (
              <tr key={parcel.id}>
                {/* <td>{parcel.id}</td> */}
                <td>{parcel.sender_name}</td>
                <td>{parcel.sender_email}</td>
                <td>{parcel.sender_address}</td>
                <td>{parcel.receiver_name}</td>
                <td>{parcel.receiver_email}</td>
                <td>{parcel.receiver_address}</td>
                <td>{parcel.weight}</td>
                <td>{parcel.type_of_shipment}</td>
                <td>
                  {parcel.status}
                </td>
                <td>
                  {parcel.current_location}
                </td>
                <td>
  <Form.Control
    type="text"
    value={parcel.newStatus}
    onChange={(e) => {
      const updatedParcels = parcels.map((p) =>
        p.id === parcel.id ? { ...p, newStatus: e.target.value } : p
      );
      setParcels(updatedParcels);
    }}
  />
</td>
<td>
  <Form.Control
    type="text"
    value={parcel.newLocation}
    onChange={(e) => {
      const updatedParcels = parcels.map((p) =>
        p.id === parcel.id ? { ...p, newLocation: e.target.value } : p
      );
      setParcels(updatedParcels);
    }}
  />
</td>
<td>
  <Button
    onClick={() =>
      updateParcelStatusAndLocation(
        parcel.id,
        parcel.newStatus,
        parcel.newLocation
      )
    }
  >
    Update
  </Button>
</td>

              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default AdminDashboard;




// import React, { useState, useEffect } from 'react';
// import { Table, Form, Button } from 'react-bootstrap';

// const AdminDashboard = () => {
//   const [parcels, setParcels] = useState([]);

//   const fetchParcelsForAdmin = async () => {
//     try {
//       const response = await fetch('/parcels/admin_dashboard', {
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch parcels for admin dashboard');
//       }

//       const data = await response.json();
//       setParcels(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     // Call fetchParcelsForAdmin function to fetch parcels on component mount
//     fetchParcelsForAdmin();
//   }, []);

//   const updateParcelStatusAndLocation = async (parcelId, status, currentLocation) => {
//     try {
//       const response = await fetch(`/parcels/${parcelId}/update_status_and_location`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
//         },
//         body: JSON.stringify({
//           status: status,
//           current_location: currentLocation,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to update parcel status and location');
//       }

//       console.log('Parcel status and location updated successfully');
//       // Handle success response, e.g., show a success message or update the state
//       fetchParcelsForAdmin(); // Refresh the parcel data after successful update
//     } catch (error) {
//       console.error('Error updating parcel status and location:', error);
//       // Handle error response, e.g., show an error message to the user
//     }
//   };

//   return (
//     <div>
//       <h2>Admin Dashboard</h2>
//       {parcels.length === 0 ? (
//         <p>No parcels found.</p>
//       ) : (
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>Parcel ID</th>
              
//               <th>Sender's Name</th>
//               <th>Sender's Email</th>
//               <th>Sender's Address</th>
//               <th>Parcel Weight</th>
//               <th>Type of Shipment</th>
//               <th>Receiver's Name</th>
//               <th>Receiver's Email</th>
//               <th>Receiver's address</th>
//               <th>Receiver's country</th>
//               <th>Status</th>
//               <th>Current Location</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {parcels.map((parcel) => (
//               <tr key={parcel.id}>
//                 <td>{parcel.id}</td>
                
//                 <td>{parcel.sender_name}</td>
//                 <td>{parcel.sender_email}</td>
//                 <td>{parcel.sender_address}</td>
//                 <td>{parcel.weight}</td>
//                 <td>{parcel.type_of_shipment}</td>
//                 <td>{parcel.receiver_name}</td>
//                 <td>{parcel.receiver_email}</td>
//                 <td>{parcel.receiver_address}</td>
//                 <td>{parcel.receiver_country}</td>
//                 <td>
//                   <Form.Control
//                     type="text"
//                     value={parcel.status}
//                     onChange={(e) => parcel.setStatus(e.target.value)}
//                   />
//                 </td>
//                 <td>
//                   <Form.Control
//                     type="text"
//                     value={parcel.current_location}
//                     onChange={(e) => parcel.setCurrentLocation(e.target.value)}
//                   />
//                 </td>
//                 <td>
//                   <Button onClick={() => updateParcelStatusAndLocation(parcel.id, parcel.status, parcel.current_location)}>
//                     Update
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;



// import React, { useState, useEffect } from 'react';

// const AdminDashboard = () => {
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [parcels, setParcels] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await fetch('/parcels/admin_dashboard', {
//           method: 'GET',
//           headers: {
//             'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
//           },
//           credentials: 'include',
//         });

//         if (response.ok) {
//           const userData = await response.json();
//           setIsAdmin(userData.is_admin); // Set isAdmin based on user data
//         } else {
//           setIsAdmin(false); // Not an admin if request fails
//         }
//       } catch (error) {
//         setIsAdmin(false); // Not an admin if an error occurs
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, []);

//   useEffect(() => {
//     if (isAdmin) {
//       fetch('/parcels/admin_dashboard', {
//         method: 'GET',
//         credentials: 'include',
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           setParcels(data);
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.error('Error fetching parcels:', error);
//           setLoading(false);
//         });
//     }
//   }, [isAdmin]);

//   const handleUpdateStatus = async (parcelId, newStatus) => {
//     try {
//       const response = await fetch(`/parcels/${parcelId}/update_admin_dashboard`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ parcel: { status: newStatus } }),
//         credentials: 'include',
//       });

//       if (response.ok) {
//         const updatedParcels = parcels.map((parcel) =>
//           parcel.id === parcelId ? { ...parcel, status: newStatus } : parcel
//         );
//         setParcels(updatedParcels);
//       } else {
//         console.error('Failed to update parcel status');
//       }
//     } catch (error) {
//       console.error('Error updating parcel status:', error);
//     }
//   };

//   if (!isAdmin) {
//     return <div>Access denied. Only admin can access the dashboard.</div>;
//   }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Admin Dashboard</h2>
//       <table className="table table-striped table-bordered table-hover">
//         <thead>
//           <tr>
//             <th>Parcel ID</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {parcels.map((parcel) => (
//             <tr key={parcel.id}>
//               <td>{parcel.id}</td>
//               <td>{parcel.status}</td>
//               <td>
//                 {parcel.status !== 'Delivered' && (
//                   <>
//                     <button onClick={() => handleUpdateStatus(parcel.id, 'In Transit')}>Mark as In Transit</button>
//                     <button onClick={() => handleUpdateStatus(parcel.id, 'Delivered')}>Mark as Delivered</button>
//                   </>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminDashboard;


