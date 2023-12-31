import React, { useState, useEffect } from "react";
import { Table, Form, Button } from "react-bootstrap";
import "../AdminDashboard.css";

const AdminDashboard = () => {
  const [parcels, setParcels] = useState([]);

  const fetchParcelsForAdmin = async () => {
    try {
      const response = await fetch("/parcels/admin_dashboard", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch parcels for admin dashboard");
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

  const updateParcelStatusAndLocation = async (
    parcelId,
    status,
    currentLocation
  ) => {
    try {
      const response = await fetch(
        `/parcels/${parcelId}/update_status_and_location`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
          body: JSON.stringify({
            status: status,
            current_location: currentLocation,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update parcel status and location");
      }

      const updatedParcelData = await response.json();
      console.log("Parcel status and location updated successfully");

      // Update the parcels array with the updated data
      const updatedParcels = parcels.map((parcel) =>
        parcel.id === parcelId
          ? {
              ...parcel,
              status: updatedParcelData.status,
              current_location: updatedParcelData.current_location,
            }
          : parcel
      );

      setParcels(updatedParcels);
    } catch (error) {
      console.error("Error updating parcel status and location:", error);
    }
  };

  return (
    <div id="admin-dashboard">
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
                <td>{parcel.status}</td>
                <td>{parcel.location}</td>
                <td>
                  <Form.Control
                    type="text"
                    value={parcel.newStatus}
                    onChange={(e) => {
                      const updatedParcels = parcels.map((p) =>
                        p.id === parcel.id
                          ? { ...p, newStatus: e.target.value }
                          : p
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
                        p.id === parcel.id
                          ? { ...p, newLocation: e.target.value }
                          : p
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

