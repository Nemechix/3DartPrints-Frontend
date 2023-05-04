import RegisterFrame from '../../Components/RegisterFrame/RegisterFrame'
import { useNavigate } from 'react-router';

function Register() {

  const navigate = useNavigate()
  
  return (
      <RegisterFrame handleLoginClick={() => navigate('/login')}/>
  )
}

export default Register;