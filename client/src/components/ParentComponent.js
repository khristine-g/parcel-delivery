import React, { useState } from 'react';
import UpdateDestination from './UpdateDestination';

const ParentComponent = () => {
  // Assuming you have the correct parcelId from the backend or state
  const parcelId = '123'; // Replace this with the actual parcelId

  return (
    <div>
      {/* Render the UpdateDestination component with the correct parcelId */}
      <UpdateDestination parcelId={parcelId} />
    </div>
  );
};

export default ParentComponent;