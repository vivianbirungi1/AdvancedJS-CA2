import { Link, useNavigate } from 'react-router-dom'

const Navbar = props => {

  let logoutButton;
  //
  let navigate = useNavigate()

  //
  const logout = () => {
    props.onAuthenticated(false)
    navigate('/', { replace: true })
  }

  if(props.authenticated){
    logoutButton = (
//
      <>
   
     <button onClick={ logout }>Logout</button>

     </>
  
    )

  }
  
  return (
    <>
      <Link to="/">Home</Link> |  
      <Link to="about">About</Link> |    
      <Link to="restaurants"> Restaurants</Link> |
      <Link to="neighborhoods"> Locations</Link> |
      <Link to="contact">Contact</Link> |
      <Link to="login">Login</Link> | 
      {logoutButton}
    </>
  )
}

export default Navbar