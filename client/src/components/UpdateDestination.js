import React, { useState } from 'react';

const UpdateDestination = ({ parcel, onUpdateDestination }) => {
  const [receiverAddress, setReceiverAddress] = useState(parcel?.receiver_address || '');
  const [receiverCountry, setReceiverCountry] = useState(parcel?.receiver_country || '');
  const [error, setError] = useState('');

  const countries = [
    { id: 1, name: 'United States' },
    { id: 2, name: 'Canada' },
    { id: 3, name: 'United Kingdom' },
    // Add more countries here as needed
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate required fields...
    if (!receiverAddress || !receiverCountry) {
      setError('All fields are required.');
      return;
    }

    // Clear any previous errors
    setError('');

    // Continue with the update process...
    try {
      const updatedParcel = {
        ...parcel,
        receiver_address: receiverAddress,
        receiver_country: receiverCountry,
      };

      await onUpdateDestination(updatedParcel);
    } catch (error) {
      console.error('Error updating parcel destination:', error);
      setError('Failed to update parcel destination. Please try again.');
      // Handle error response, e.g., show an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit} className="update-form">
      <div className="form-group">
        <label htmlFor="receiverAddress">Receiver's Address</label>
        <input
          type="text"
          id="receiverAddress"
          value={receiverAddress}
          onChange={(e) => setReceiverAddress(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="receiverCountry">Receiver's Country</label>
        <select
          id="receiverCountry"
          value={receiverCountry}
          onChange={(e) => setReceiverCountry(e.target.value)}
          required
        >
          <option value="">Choose...</option>
          {countries.map((country) => (
            <option key={country.id} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      {/* Show any validation errors */}
      {error && <div className="error">{error}</div>}

      {/* Add a submit button to trigger the update */}
      <button type="submit">Update Destination</button>
    </form>
  );
};

export default UpdateDestination;



