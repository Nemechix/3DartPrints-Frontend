import React, { useState } from "react";
import Redirect  from "react-router-dom";
import DesignCard from '../../Components/DesingCard/DesingCard';

const AdminTools = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  if (!loggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <h1>Admin Tools v1.0 - 3DartPrints</h1>
      <p>      <DesignCard/> </p>
    </div>
  );
};

export default AdminTools