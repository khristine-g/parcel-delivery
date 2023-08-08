import React, { useState } from 'react';
import '../Quote.css';

const Quote = () => {
  const [showForm, setShowForm] = useState(false);
  const [weight, setWeight] = useState('');
  const [cost, setCost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Calculate the cost here based on the weight (you can replace this with your own calculation logic)
    // For example, let's assume the cost is $2 per pound
    const cost = parseFloat(weight) * 2;
    setCost(cost.toFixed(2)); // Set the cost with two decimal places
  };

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <div className="quote-container">
      <h6>Calculate the Cost of Sending Your Parcel</h6>
      <button onClick={toggleForm}>Get Quote</button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label>
            Parcel Weight (in pounds):
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </label>
          <button type="submit">Calculate </button>
        </form>
      )}
      {cost && <div className="cost-result">The cost to send your parcel is ${cost}</div>}
    </div>
  );
};

export default Quote;
