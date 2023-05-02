import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import  getDesignById  from '../../Services/getDesignById';

function DesignDetail() {
    const [design, setDesign ] = useState({})
    const {id} = useParams()
    
    
      const getDesign = async () => {
        const result = await getDesignById(id);
        console.log(result.data)
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

export default DesignDetail;
