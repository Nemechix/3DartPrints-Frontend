import React from 'react';
import './PrinterModel.css';

const PrinterModel = ({ image, brand, dimensions }) => {
  return (
    <div className="printer-model">
      <h2 className="printer-model_brand">{brand}</h2>
      <h2 className="printer-model_model">{model}</h2>
      <p className="printe-model_dimensions">{dimensions}</p>
    </div>
  );
};

export default PrinterModel;