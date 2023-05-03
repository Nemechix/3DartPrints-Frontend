import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import  getDesignById  from '../../Services/getDesignById';

function UniqueDesign() {
    const [design, setDesign ] = useState({})
    const {id} = useParams()
    
    
      const getDesign = async () => {
        const result = await getDesignById(id);
        setDesign(result.data);
      };
    
      useEffect(() => {
        getDesign();
      }, [id]);
    

  return (
    <div>
      <h1>{design.name}</h1>
      <p>{design.description}</p>
    </div>
  );
}

export default UniqueDesign;
