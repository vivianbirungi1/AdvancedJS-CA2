import { Link, useNavigate } from 'react-router-dom'

const Navbar = props => {

  let logoutButton;
  let profileButton;
  let loginButton;
  let registerButton;
  //
  let navigate = useNavigate()

  //
  const logout = () => {
    props.onAuthenticated(false)
    navigate('/', { replace: true })
  }

  const profile = () => {
   // props.onAuthenticated(true)
    navigate('profile', { replace: true })
  }

  const login = () => {
     props.onAuthenticated(false)
     navigate('/', { replace: true })
   }

   const register = () => {
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

  } else{
    loginButton = (
      <>

      <button onClick={ login }>Login</button>

      </>
    )

    registerButton = (
      <>

        <button onClick={ register }>Register</button>

      </>
    )
  }

  if(props.authenticated){
    profileButton = (
//
      <>
   
     <button onClick={ profile }>Profile</button>

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
      {/* <Link to="profile">Profile</Link> | */}
      {/* <Link to="update-preferences">Update Preferences</Link> |  */}
      <Link to="register">{registerButton}</Link> | 
      <Link to="login">{loginButton}</Link> | 
      {logoutButton} 
     <Link to="profile">{profileButton}</Link> 
    </>
  )
}

export default Navbar