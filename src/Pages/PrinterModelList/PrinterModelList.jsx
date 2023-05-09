import React, { useState, useEffect } from 'react';
import PrinterModel from '../../Components/PrinterModel/PrinterModel';
import api from '../../Services/config';

const PrinterModelsList = () => {
  const [printerModels, setPrinterModels] = useState([]);

  useEffect(() => {
    const fetchPrinterModels = async () => {
      const response = await api.get('/printer');
      setPrinterModels(response.data);
    };
    fetchPrinterModels();
  }, []);

  return (
    <div>
      {printerModels.map((printerModel) => (
        <PrinterModel
          key={printerModel.id}
          image={printerModel.image}
          name={printerModel.name}
          description={printerModel.description}
        />
      ))}
    </div>
  );
};

export default PrinterModelsList;





/*
  const printerModels = [
    {
      id: 1,
      name: 'Prusa i3 MK3S',
      description: 'La Prusa i3 MK3S es una de las impresoras 3D más populares y mejor valoradas del mercado.',
      image: 'https://www.prusa3d.com/wp-content/uploads/2019/02/mk3s-print-sample.jpg',
    },
    {
      id: 2,
      name: 'Creality Ender 3',
      description: 'La Creality Ender 3 es una impresora 3D de bajo costo pero con una gran calidad de impresión.',
      image: 'https://cdn.shopify.com/s/files/1/0274/4293/7933/products/1_b7a00516-19c9-4ba9-9649-7b8a051c7551.jpg?v=1638450566',
    },
  ];
*/