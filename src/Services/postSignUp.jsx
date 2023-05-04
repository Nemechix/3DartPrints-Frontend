import api from "./config"

async function postSignUp({ username, email, password }) {
  try {
    const user = await api.post('/auth/signUp', {
      name: 'DEFAULT', // varchar(255) NOT NULL,
      surname: 'DEFAULT', // varchar(255) NOT NULL,
      username: username, // varchar(255) NOT NULL,
      email: email, // varchar(255) DEFAULT NULL,
      password: password, // varchar(255) NOT NULL,
      verified: 1, // tinyint(1) NOT NULL,
      role: 'user', // enum('admin','user') NOT NULL,
      designer: 0, // tinyint(1) NOT NULL,
      printer: 0, // tinyint(1) NOT NULL,
      //createdAt: '2023-05-16 23:00:00' // datetime NOT NULL,
    })
    
    return user
  } catch(error) {
    return ''
  }

}

export default postSignUp