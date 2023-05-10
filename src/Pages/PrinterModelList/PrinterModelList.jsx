import { useEffect, useState } from 'react';
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
      {printerModels.map((printer) => (
        <PrinterModel
          key={printer.id}
        //  image={printer.image}
          name={printer.brand}
          model={printer.model}
          speed={printer.speed}
          resolution={printer.resolution}
          dimensions={printer.dimensions}
        />
      ))}
    </div>
  );
};

export default PrinterModelsList;