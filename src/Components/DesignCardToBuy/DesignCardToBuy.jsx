import { useEffect, useState } from 'react';
import api from './config';
import './DesignDetails.css';

function DesignDetails({ id }) {
  const [design, setDesign] = useState(null);

  useEffect(() => {
    async function fetchDesign() {
      const data = await api.get(`/design/${id}`);
      setDesign(data);
    }
    fetchDesign();
  }, [id]);

  if (!design) {
    return <div>Loading...</div>;
  }

  return (
    <div className="design-details">
      <img src={design.image} alt={design.name} />
      <h1>{design.name}</h1>
      <p>{design.description}</p>
      <p className="price">{design.price} USD</p>
      <button className="buy-button">Buy Now</button>
    </div>
  );
}

export default DesignDetails;
