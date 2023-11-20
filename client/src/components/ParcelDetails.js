import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import UpdateDestination from "./UpdateDestination";

const ParcelDetails = () => {
  const [parcels, setParcels] = useState([]);

  // ... calculateCost function ...

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
    fetchParcels();
  }, []);

  const handleUpdateDestination = async (updatedParcel) => {
    try {
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
      fetchParcels(); // Refresh the parcel data after successful update
    } catch (error) {
      console.error("Error updating parcel destination:", error);
    }
  };

  return (
    <div id="parcel-details">
      <h2>My Shipments</h2>
      {parcels.length === 0 ? (
        <p>No parcels found.</p>
      ) : (
        <Table id="t-parcel">
          <thead>
            <tr>
              <th>Parcel ID</th>
              <th>Receiver's Name</th>
              <th>Receiver's Email</th>
              <th>Receiver's Address</th>
              <th>Receiver's Country</th>
              <th>Parcel Weight</th>
              <th>Type of Shipment</th>
              <th>Change destination</th>
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
