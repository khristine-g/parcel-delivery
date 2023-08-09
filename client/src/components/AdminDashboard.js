import React, { useState, useEffect } from "react";

const AdminDashboard = () => {
  const [parcels, setParcels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all parcels for all users
    fetch("/parcels", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch parcels");
        }
        return response.json();
      })
      .then((data) => {
        setParcels(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  // Function to update parcel status
  const handleUpdateStatus = async (parcelId, newStatus) => {
    try {
      const response = await fetch(`/parcels/admin_dashboard/${parcelId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error("Failed to update parcel status");
      }

      // Update the parcels state after successful update
      const updatedParcels = parcels.map((parcel) =>
        parcel.id === parcelId ? { ...parcel, status: newStatus } : parcel
      );
      setParcels(updatedParcels);
    } catch (error) {
      console.error("Error updating parcel status:", error);
      // Handle error response, e.g., show an error message to the user
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div id="admin-dashboard">
      <h2>Admin Dashboard</h2>
      {parcels.length === 0 ? (
        <p>No parcels found.</p>
      ) : (
        <table className="table table-primary" striped bordered hover>
          <thead>
            <tr>
              <th>Parcel ID</th>
              <th>Receiver's Name</th>
              <th>Receiver's Email</th>
              <th>Receiver's Address</th>
              <th>Receiver's Country</th>
              <th>Parcel Weight</th>
              <th>Type of Shipment</th>
              <th>Status</th>
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
                <td>{parcel.status}</td>
                <td>
                  {/* Buttons to update the parcel status */}
                  {parcel.status !== "Delivered" && (
                    <>
                      <button
                        onClick={() =>
                          handleUpdateStatus(parcel.id, "In Transit")
                        }
                      >
                        Mark as In Transit
                      </button>
                      <button
                        onClick={() =>
                          handleUpdateStatus(parcel.id, "Delivered")
                        }
                      >
                        Mark as Delivered
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboard;
