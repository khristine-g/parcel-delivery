import React, { useState } from 'react';
import '../Parcel.css';

const countries = [
  { id: 1, name: 'United States' },
  { id: 2, name: 'United Kingdom' },
  { id: 3, name: 'Canada' },

];

const Parcel = () => {
  // Sender's State
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderAddress, setSenderAddress] = useState('');
  const [senderAddress2, setSenderAddress2] = useState('');
  const [senderCity, setSenderCity] = useState('');
  const [senderState, setSenderState] = useState('');
  const [senderZip, setSenderZip] = useState('');

  // Receiver's State
  const [receiverName, setReceiverName] = useState('');
  const [receiverEmail, setReceiverEmail] = useState('');
  const [receiverAddress, setReceiverAddress] = useState('');
  const [receiverAddress2, setReceiverAddress2] = useState('');
  const [receiverCity, setReceiverCity] = useState('');
  const [receiverState, setReceiverState] = useState('');
  const [receiverZip, setReceiverZip] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleSenderSubmit = (event) => {
    event.preventDefault();
    console.log('Sender Form submitted:', {
      senderName,
      senderEmail,
      senderAddress,
      senderAddress2,
      senderCity,
      senderState,
      senderZip,
    });
  };

  const handleReceiverSubmit = (event) => {
    event.preventDefault();
    console.log('Receiver Form submitted:', {
      receiverName,
      receiverEmail,
      receiverAddress,
      receiverAddress2,
      receiverCity,
      receiverState,
      receiverZip,
      selectedCountry,
    });
  };

  return (
    <div className="forms-container">
      <form className="parcel-form sender-form" onSubmit={handleSenderSubmit}>
        <h2>Sender's Information</h2>
        <div className="form-group">
          <label htmlFor="inputSenderName">Name</label>
          <input type="text" className="form-control" id="inputSenderName" placeholder="Sender's Name" value={senderName} onChange={(e) => setSenderName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="inputSenderEmail">Email</label>
          <input type="email" className="form-control" id="inputSenderEmail" placeholder="Sender's Email" value={senderEmail} onChange={(e) => setSenderEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="inputSenderAddress">Address</label>
          <input type="text" className="form-control" id="inputSenderAddress" placeholder="Sender's Address" value={senderAddress} onChange={(e) => setSenderAddress(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="inputSenderAddress2">Address 2</label>
          <input type="text" className="form-control" id="inputSenderAddress2" placeholder="Sender's Apartment, studio, or floor" value={senderAddress2} onChange={(e) => setSenderAddress2(e.target.value)} />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputSenderCity">City</label>
            <input type="text" className="form-control" id="inputSenderCity" value={senderCity} onChange={(e) => setSenderCity(e.target.value)} required />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputSenderState">Country</label>
            <select id="inputSenderState" className="form-control" value={senderState} onChange={(e) => setSenderState(e.target.value)} required>
              <option value="">Choose...</option>
              <option value="KE">Kenya</option>
              <option value="ET">Ethiopia</option>
              <option value="ET">Uganda</option>
              <option value="ET">Rwanda</option>
              <option value="ET">Tanzania</option>
             
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputSenderZip">Zip</label>
            <input type="text" className="form-control" id="inputSenderZip" value={senderZip} onChange={(e) => setSenderZip(e.target.value)} required />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit Sender's Info</button>
      </form>

      <form className="parcel-form receiver-form" onSubmit={handleReceiverSubmit}>
        <h2>Receiver's Information</h2>
        <div className="form-group">
          <label htmlFor="inputReceiverName">Name</label>
          <input type="text" className="form-control" id="inputReceiverName" placeholder="Receiver's Name" value={receiverName} onChange={(e) => setReceiverName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="inputReceiverEmail">Email</label>
          <input type="email" className="form-control" id="inputReceiverEmail" placeholder="Receiver's Email" value={receiverEmail} onChange={(e) => setReceiverEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="inputReceiverAddress">Address</label>
          <input type="text" className="form-control" id="inputReceiverAddress" placeholder="Receiver's Address" value={receiverAddress} onChange={(e) => setReceiverAddress(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="inputReceiverAddress2">Address 2</label>
          <input type="text" className="form-control" id="inputReceiverAddress2" placeholder="Receiver's Apartment, studio, or floor" value={receiverAddress2} onChange={(e) => setReceiverAddress2(e.target.value)} />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputReceiverCity">City</label>
            <input type="text" className="form-control" id="inputReceiverCity" value={receiverCity} onChange={(e) => setReceiverCity(e.target.value)} required />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputReceiverState">Country</label>
            <select id="inputReceiverState" className="form-control" value={receiverState} onChange={(e) => setReceiverState(e.target.value)} required>
              <option value="">Choose...</option>
              <option value="NY">New York</option>
              <option value="CA">California</option>
              {/* Add more states as needed */}
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputReceiverZip">Zip</label>
            <input type="text" className="form-control" id="inputReceiverZip" value={receiverZip} onChange={(e) => setReceiverZip(e.target.value)} required />
          </div>
        </div>
       
       <div className="form-group">
          <label htmlFor="inputCountry">Destination Country</label>
          <select id="inputCountry" className="form-control" value={selectedCountry} onChange={handleCountryChange} required>
            <option value="">Choose...</option>
            {countries.map((country) => (
              <option key={country.id} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit Receiver's Info</button>
      </form>
    </div>
  );
};

export default Parcel;

