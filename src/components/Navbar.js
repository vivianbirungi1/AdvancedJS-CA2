import { Link } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <div>
      <Link to="/">Home</Link> |  
      <Link to="about">About</Link> |    
      <Link to="restaurants"> Restaurants</Link> |
      <Link to="contact">Contact</Link> |
      <Link to="login">Login</Link> | 
      <button>Logout</button>
    </div>
  )
}

export default Navbar