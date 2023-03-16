import React from 'react';
import '../searchForm.css';

interface LocationInputFieldProps {
  text: string;
}

const LocationInputField = ({ text }: LocationInputFieldProps) => {
  return (
    <div className='locationField'>
      <p className="locationText">{text}</p>
      <input
        placeholder="City, airport, region, district..."
      />
    </div>
  );
};

export default LocationInputField;
