import React, { useState, useEffect } from 'react';
import { getUserData, getMyUserData } from '../../Services/UserData';
import { GetMyProfile } from '../../Services/GetMyProfile'

  function OtherProfilePage({ userData, username }) {
    return (
      <div>
        <h1>Perfil de {username}</h1>
        <p>Nombre: {userData.nombre}</p>
        <p>Email: {userData.email}</p>
      </div>
    );
  }

function UserProfile(props) {
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
      getMyUserData()
        .then(data => setUserData(data))
        .catch(error => console.log(error));
    }, []);
  
    useEffect(() => {
      if (userData && userData.username !== props.match.params.username) {
        getUserData(props.match.params.username)
          .then(data => setUserData(data))
          .catch(error => console.log(error));
      }
    }, [props.match.params.username, userData]);
  
    if (!userData) {
      return <div>Cargando...</div>;
    }
  
    if (userData.username === props.match.params.username) {
      return <GetMyProfile userData={userData} />;
    } else {
      return <OtherProfilePage userData={userData} username={props.match.params.username} />;
    }
  }
  
  export default UserProfile;
  