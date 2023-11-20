import React, { useState, useEffect } from 'react';

const DeliveryOrderDetails = ({ deliveryOrderId }) => {
  const [deliveryOrder, setDeliveryOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the delivery order details from your backend API
    const fetchDeliveryOrderDetails = async () => {
      try {
        const response = await fetch(`/parcels/${deliveryOrderId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch delivery order details');
        }
        const data = await response.json();
        setDeliveryOrder(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchDeliveryOrderDetails();
  }, [deliveryOrderId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!deliveryOrder) {
    return <div>Failed to load delivery order details.</div>;
  }

  return (
    <div>
      <h2>Delivery Order Details</h2>
      <p>Sender's Name: {deliveryOrder.sender_name}</p>
      <p>Receiver's Name: {deliveryOrder.receiver_name}</p>
      <p>Receiver's Address: {deliveryOrder.receiver_address}</p>
      <p>Tracking Information: {deliveryOrder.tracking_info}</p>
      {/* Add more delivery order details as needed */}
    </div>
  );
};

export default DeliveryOrderDetails;