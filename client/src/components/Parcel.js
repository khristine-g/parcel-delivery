import React, { useState } from 'react';
import '../Parcel.css';

const countries = [
  { id: 1, name: 'United States' },
  { id: 2, name: 'United Kingdom' },
  { id: 3, name: 'Canada' },
  // Add more countries here...
];

const Parcel = () => {
  const [weight, setWeight] = useState('');
  const [typeOfShipment, setTypeOfShipment] = useState('');

  // Sender Information
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderAddress, setSenderAddress] = useState('');
  const [senderPhoneNumber, setSenderPhoneNumber] = useState('');

  // Receiver Information
  const [receiverName, setReceiverName] = useState('');
  const [receiverEmail, setReceiverEmail] = useState('');
  const [receiverAddress, setReceiverAddress] = useState('');
  const [receiverCountry, setReceiverCountry] = useState('');
  const [receiverPhoneNumber, setReceiverPhoneNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Get the JWT token from localStorage (assuming you stored it after login)
    const token = localStorage.getItem('jwtToken');
    console.log('JWT Token:', token);

    const parcelData = {
      sender_name: senderName,
      sender_email: senderEmail,
      sender_address: senderAddress,
      sender_phone_number: senderPhoneNumber,
      receiver_name: receiverName,
      receiver_email: receiverEmail,
      receiver_address: receiverAddress,
      receiver_country: receiverCountry,
      receiver_phone_number: receiverPhoneNumber,
      weight,
      type_of_shipment: typeOfShipment,
    };

    fetch('http://localhost:3000/parcels', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Include the JWT token in the Authorization header
      },
      body: JSON.stringify({ parcel: parcelData }),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Parcel data sent successfully');
          // Clear the form fields after successful submission (optional)
          setWeight('');
          setTypeOfShipment('');
          setSenderName('');
          setSenderEmail('');
          setSenderAddress('');
          setSenderPhoneNumber('');
          setReceiverName('');
          setReceiverEmail('');
          setReceiverAddress('');
          setReceiverCountry('');
          setReceiverPhoneNumber('');
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .catch((error) => {
        console.error('Error sending parcel data:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="forms-container">
      {/* Sender's Information */}
      <div className="form-section">
        <h2>Sender's Information</h2>
        <div className="form-group">
          <label htmlFor="inputSenderName">Name</label>
          <input
            type="text"
            className="form-control"
            id="inputSenderName"
            placeholder="Sender's Name"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputSenderEmail">Email</label>
          <input
            type="email"
            className="form-control"
            id="inputSenderEmail"
            placeholder="Sender's Email"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputSenderAddress">Address</label>
          <input
            type="text"
            className="form-control"
            id="inputSenderAddress"
            placeholder="Sender's Address"
            value={senderAddress}
            onChange={(e) => setSenderAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputSenderPhoneNumber">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="inputSenderPhoneNumber"
            placeholder="Sender's Phone Number"
            value={senderPhoneNumber}
            onChange={(e) => setSenderPhoneNumber(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Receiver's Information */}
      <div className="form-section">
        <h2>Receiver's Information</h2>
        <div className="form-group">
          <label htmlFor="inputReceiverName">Name</label>
          <input
            type="text"
            className="form-control"
            id="inputReceiverName"
            placeholder="Receiver's Name"
            value={receiverName}
            onChange={(e) => setReceiverName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputReceiverEmail">Email</label>
          <input
            type="email"
            className="form-control"
            id="inputReceiverEmail"
            placeholder="Receiver's Email"
            value={receiverEmail}
            onChange={(e) => setReceiverEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputReceiverAddress">Address</label>
          <input
            type="text"
            className="form-control"
            id="inputReceiverAddress"
            placeholder="Receiver's Address"
            value={receiverAddress}
            onChange={(e) => setReceiverAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputReceiverCountry">Country</label>
          <select
            id="inputReceiverCountry"
            className="form-control"
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
        <div className="form-group">
          <label htmlFor="inputReceiverPhoneNumber">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="inputReceiverPhoneNumber"
            placeholder="Receiver's Phone Number"
            value={receiverPhoneNumber}
            onChange={(e) => setReceiverPhoneNumber(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Parcel Information */}
      <div className="form-section">
        <h2>Parcel Information</h2>
        <div className="form-group">
          <label htmlFor="inputWeight">Weight</label>
          <input
            type="text"
            className="form-control"
            id="inputWeight"
            placeholder="Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="inputTypeOfShipment">Type of Shipment</label>
          <select
            id="inputTypeOfShipment"
            className="form-control"
            value={typeOfShipment}
            onChange={(e) => setTypeOfShipment(e.target.value)}
            required
          >
            <option value="">Choose...</option>
            <option value="air">Air</option>
            <option value="water">Water</option>
            <option value="road">Road</option>
          </select>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit Parcel
      </button>
    </form>
  );
};

export default Parcel;


// import React, { useState } from 'react';
// import '../Parcel.css';

// const countries = [
//   { id: 1, name: 'United States' },
//   { id: 2, name: 'United Kingdom' },
//   { id: 3, name: 'Canada' },
//   // Add more countries here...
// ];

// const Parcel = () => {
//   const [weight, setWeight] = useState('');
//   const [typeOfShipment, setTypeOfShipment] = useState('');

//   // Sender Information
//   const [senderName, setSenderName] = useState('');
//   const [senderEmail, setSenderEmail] = useState('');
//   const [senderAddress, setSenderAddress] = useState('');

//   // Receiver Information
//   const [receiverName, setReceiverName] = useState('');
//   const [receiverEmail, setReceiverEmail] = useState('');
//   const [receiverAddress, setReceiverAddress] = useState('');
//   const [receiverCountry, setReceiverCountry] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Get the JWT token from localStorage (assuming you stored it after login)
//     const token = localStorage.getItem('jwtToken');
//     console.log('JWT Token:', token);

//     const parcelData = {
//       sender_name: senderName,
//       sender_email: senderEmail,
//       sender_address: senderAddress,
//       receiver_name: receiverName,
//       receiver_email: receiverEmail,
//       receiver_address: receiverAddress,
//       receiver_country: receiverCountry,
//       weight,
//       type_of_shipment: typeOfShipment,
//     };

//     fetch('http://localhost:3000/parcels', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`, // Include the JWT token in the Authorization header
//       },
//       body: JSON.stringify({ parcel: parcelData }),
//     })
//       .then((response) => {
//         if (response.ok) {
//           console.log('Parcel data sent successfully');
//           // Clear the form fields after successful submission (optional)
//           setWeight('');
//           setTypeOfShipment('');
//           setSenderName('');
//           setSenderEmail('');
//           setSenderAddress('');
//           setReceiverName('');
//           setReceiverEmail('');
//           setReceiverAddress('');
//           setReceiverCountry('');
//         } else {
//           throw new Error('Network response was not ok');
//         }
//       })
//       .catch((error) => {
//         console.error('Error sending parcel data:', error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="forms-container">
//       {/* Sender's Information */}
//       <div className="form-section">
//         <h2>Sender's Information</h2>
//         <div className="form-group">
//           <label htmlFor="inputSenderName">Name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="inputSenderName"
//             placeholder="Sender's Name"
//             value={senderName}
//             onChange={(e) => setSenderName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="inputSenderEmail">Email</label>
//           <input
//             type="email"
//             className="form-control"
//             id="inputSenderEmail"
//             placeholder="Sender's Email"
//             value={senderEmail}
//             onChange={(e) => setSenderEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="inputSenderAddress">Address</label>
//           <input
//             type="text"
//             className="form-control"
//             id="inputSenderAddress"
//             placeholder="Sender's Address"
//             value={senderAddress}
//             onChange={(e) => setSenderAddress(e.target.value)}
//             required
//           />
//         </div>
//         {/* Present Location (assuming it's read-only) */}
//         <div className="form-group">
//           <label htmlFor="inputPresentLocation">Present Location</label>
//           <input
//             type="text"
//             className="form-control"
//             id="inputPresentLocation"
//             value="Kenya"
//             readOnly
//           />
//         </div>
//       </div>

//       {/* Receiver's Information */}
//       <div className="form-section">
//         <h2>Receiver's Information</h2>
//         <div className="form-group">
//           <label htmlFor="inputReceiverName">Name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="inputReceiverName"
//             placeholder="Receiver's Name"
//             value={receiverName}
//             onChange={(e) => setReceiverName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="inputReceiverEmail">Email</label>
//           <input
//             type="email"
//             className="form-control"
//             id="inputReceiverEmail"
//             placeholder="Receiver's Email"
//             value={receiverEmail}
//             onChange={(e) => setReceiverEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="inputReceiverAddress">Address</label>
//           <input
//             type="text"
//             className="form-control"
//             id="inputReceiverAddress"
//             placeholder="Receiver's Address"
//             value={receiverAddress}
//             onChange={(e) => setReceiverAddress(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="inputReceiverCountry">Country</label>
//           <select
//             id="inputReceiverCountry"
//             className="form-control"
//             value={receiverCountry}
//             onChange={(e) => setReceiverCountry(e.target.value)}
//             required
//           >
//             <option value="">Choose...</option>
//             {countries.map((country) => (
//               <option key={country.id} value={country.name}>
//                 {country.name}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* Parcel Information */}
//       <div className="form-section">
//         <h2>Parcel Information</h2>
//         <div className="form-group">
//           <label htmlFor="inputWeight">Weight</label>
//           <input
//             type="text"
//             className="form-control"
//             id="inputWeight"
//             placeholder="Weight"
//             value={weight}
//             onChange={(e) => setWeight(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="inputTypeOfShipment">Type of Shipment</label>
//           <select
//             id="inputTypeOfShipment"
//             className="form-control"
//             value={typeOfShipment}
//             onChange={(e) => setTypeOfShipment(e.target.value)}
//             required
//           >
//             <option value="">Choose...</option>
//             <option value="air">Air</option>
//             <option value="water">Water</option>
//             <option value="road">Road</option>
//           </select>
//         </div>
//       </div>

//       <button type="submit" className="btn btn-primary">
//         Submit Parcel
//       </button>
//     </form>
//   );
// };

// export default Parcel;

// import React, { useState } from 'react';
// import '../Parcel.css';

// const countries = [
//   { id: 1, name: 'United States' },
//   { id: 2, name: 'United Kingdom' },
//   { id: 3, name: 'Canada' },
//   // Add more countries here...
// ];

// const Parcel = () => {
//   const [weight, setWeight] = useState('');
//   const [presentLocation, setPresentLocation] = useState('Kenya');
//   const [typeOfShipment, setTypeOfShipment] = useState('');

//   const [senderName, setSenderName] = useState('');
//   const [senderEmail, setSenderEmail] = useState('');
//   const [senderAddress, setSenderAddress] = useState('');

//   const [receiverName, setReceiverName] = useState('');
//   const [receiverEmail, setReceiverEmail] = useState('');
//   const [receiverAddress, setReceiverAddress] = useState('');
//   const [receiverCountry, setReceiverCountry] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const parcelData = {
//       weight,
//       present_location: presentLocation,
//       type_of_shipment: typeOfShipment,
//       sender_name: senderName,
//       sender_email: senderEmail,
//       sender_address: senderAddress,
//       receiver_name: receiverName,
//       receiver_email: receiverEmail,
//       receiver_address: receiverAddress,
//       receiver_country: receiverCountry,
//     };

//     // ... make the HTTP POST request with parcelData ...
//   };

//   return (
//     <form onSubmit={handleSubmit} className="forms-container">
//       {/* Sender's Information */}
//       <div className="form-section">
//         <h2>Sender's Information</h2>
//         <div className="form-group">
//           <label htmlFor="inputSenderName">Name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="inputSenderName"
//             placeholder="Sender's Name"
//             value={senderName}
//             onChange={(e) => setSenderName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="inputSenderEmail">Email</label>
//           <input
//             type="email"
//             className="form-control"
//             id="inputSenderEmail"
//             placeholder="Sender's Email"
//             value={senderEmail}
//             onChange={(e) => setSenderEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="inputSenderAddress">Address</label>
//           <input
//             type="text"
//             className="form-control"
//             id="inputSenderAddress"
//             placeholder="Sender's Address"
//             value={senderAddress}
//             onChange={(e) => setSenderAddress(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="inputPresentLocation">Present Location</label>
//           <input
//             type="text"
//             className="form-control"
//             id="inputPresentLocation"
//             value={presentLocation}
//             readOnly
//           />
//         </div>
//       </div>

//       {/* Receiver's Information */}
//       <div className="form-section">
//         <h2>Receiver's Information</h2>
//         <div className="form-group">
//           <label htmlFor="inputReceiverName">Name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="inputReceiverName"
//             placeholder="Receiver's Name"
//             value={receiverName}
//             onChange={(e) => setReceiverName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="inputReceiverEmail">Email</label>
//           <input
//             type="email"
//             className="form-control"
//             id="inputReceiverEmail"
//             placeholder="Receiver's Email"
//             value={receiverEmail}
//             onChange={(e) => setReceiverEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="inputReceiverAddress">Address</label>
//           <input
//             type="text"
//             className="form-control"
//             id="inputReceiverAddress"
//             placeholder="Receiver's Address"
//             value={receiverAddress}
//             onChange={(e) => setReceiverAddress(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="inputReceiverCountry">Country</label>
//           <select
//             id="inputReceiverCountry"
//             className="form-control"
//             value={receiverCountry}
//             onChange={(e) => setReceiverCountry(e.target.value)}
//             required
//           >
//             <option value="">Choose...</option>
//             {countries.map((country) => (
//               <option key={country.id} value={country.name}>
//                 {country.name}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* Parcel Information */}
//       <div className="form-section">
//         <h2>Parcel Information</h2>
//         <div className="form-group">
//           <label htmlFor="inputWeight">Weight</label>
//           <input
//             type="text"
//             className="form-control"
//             id="inputWeight"
//             placeholder="Weight"
//             value={weight}
//             onChange={(e) => setWeight(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="inputTypeOfShipment">Type of Shipment</label>
//           <select
//             id="inputTypeOfShipment"
//             className="form-control"
//             value={typeOfShipment}
//             onChange={(e) => setTypeOfShipment(e.target.value)}
//             required
//           >
//             <option value="">Choose...</option>
//             <option value="air">Air</option>
//             <option value="water">Water</option>
//             <option value="road">Road</option>
//           </select>
//         </div>
//       </div>

//       <button type="submit" className="btn btn-primary">
//         Submit Parcel
//       </button>
//     </form>
//   );
// };

// export default Parcel;

