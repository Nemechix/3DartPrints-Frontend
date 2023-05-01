import React, { useState, useEffect } from 'react'
import getDesignsByCategory from '../../Services/DesingsByCategory';

function DesignsByCategory({ categoria }) {
  const [designs, setDesigns] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getDesignsByCategory(categoria);
      console.log(response.data)
      setDesigns(response.data);
    }
    fetchData();
  }, [categoria]);

  return (
    <div>
      <h2>Diseños por categoría: {categoria}</h2>
      <ul>
        {designs.map(design => (
          <li key={design.id}>
            {design.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DesignsByCategory;
