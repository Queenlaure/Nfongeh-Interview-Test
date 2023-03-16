import React from 'react';
import '../searchForm.css';

const CarDeliveryLocation = () => {
  return (
    <div className="row">
      <div className="mt-[-25px] col">
        <input className='checkbox' type="checkbox" name="Deliver the car somewhere else" />
        <label className="ml-2 " >Deliver the car somewhere else</label>
      </div>
    </div>
  );
};

export default CarDeliveryLocation;
