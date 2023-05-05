import api from "./config"

async function postSignUp(obj) {
  try {
    const { data } = await api.post('/auth/signUp', {
      name: obj.name, // varchar(255) NOT NULL,
      surname: obj.surname, // varchar(255) NOT NULL,
      username: obj.username, // varchar(255) NOT NULL,
      email: obj.email, // varchar(255) DEFAULT NULL,
      password: obj.password, // varchar(255) NOT NULL,
      verified: 1, // tinyint(1) NOT NULL,
      role: 'user', // enum('admin','user') NOT NULL,
      designer: obj.designer, // tinyint(1) NOT NULL,
      printer: obj.printer, // tinyint(1) NOT NULL,
      //createdAt: '2023-05-16 23:00:00' // datetime NOT NULL,
    })
    
    return data.data
  } catch(error) {
    return new Error(error)
  }

}

export default postSignUp