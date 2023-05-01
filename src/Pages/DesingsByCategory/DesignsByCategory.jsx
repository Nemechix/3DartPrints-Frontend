import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getDesignsByCategoryId from '../../Services/DesignsByCategory';

function DesignsByCategory() {
  const { name } = useParams();
  const [designs, setDesigns] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getDesignsByCategoryId(name);
      setDesigns(response.data);
    }
    fetchData();
  }, [name]);

  return (
    <div>
      <h2>Diseños por categoría: {name}</h2>
      <ul>
        {designs.map((design) => (
          <li key={design.name}> <img style={{ width: '200px', height: '200px' }} className='design_image' src={design.image} alt="123" />{design.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DesignsByCategory;
