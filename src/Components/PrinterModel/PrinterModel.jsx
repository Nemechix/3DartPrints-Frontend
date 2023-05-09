import React from 'react';
import './PrinterModel.css';

const PrinterModel = ({ image, name, description }) => {
  return (
    <div className="printer-model">
      <img src={image} alt={name} className="printer-model_image" />
      <h2 className="printer-model_name">{name}</h2>
      <p className="printer-model_description">{description}</p>
    </div>
  );
};

export default PrinterModel;