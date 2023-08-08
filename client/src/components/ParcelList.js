// ParcelList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ParcelList = () => {
  const [parcels, setParcels] = useState([]);

  useEffect(() => {
    // Fetch the parcels associated with the current user
    const fetchParcels = async () => {
      try {
        const response = await fetch('/parcels', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch parcels');
        }
        const data = await response.json();
        setParcels(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchParcels();
  }, []);

  return (
    <div>
      <h2>My Shipments</h2>
      {parcels.map((parcel) => (
        <div key={parcel.id}>
          <p>Parcel ID: {parcel.id}</p>
          <p>Sender's Name: {parcel.sender_name}</p>
          <p>Receiver's Name: {parcel.receiver_name}</p>
          <Link to={`/my-shipments/${parcel.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ParcelList;
