import React, { useState, useEffect } from 'react';
import { getUserData } from './userData';

function UserProfile(props) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getUserData(props.username)
      .then(data => setUserData(data))
      .catch(error => console.log(error));
  }, [props.username]);

  if (!userData) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Perfil de {props.username}</h1>
      <p>Nombre: {userData.nombre}</p>
      <p>Email: {userData.email}</p>
      <p>Printer: {userData.printer}</p>
      <p>Designs: {userData.designs}</p>
    </div>
  );
}

export default UserProfile;
