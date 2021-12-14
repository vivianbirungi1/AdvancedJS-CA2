import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react';

//COMPONENTS
import Navbar from './components/Navbar'
import Register from './components/Register'

//PAGES
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';

//RESTAURANTS
import RestaurantsIndex from './pages/restaurants/Index';
import RestaurantsShow from './pages/restaurants/Show';
import RestaurantsCreate from './pages/restaurants/Create';

//NEIGHBORHOODS
import NeighborhoodsIndex from './pages/neighborhoods/Index';

//USER
import Login from './pages/users/Login';
import Profile from './pages/users/Profile'
import UpdatePreferences from './pages/users/UpdatePreferences'
import CreateAdmin from './pages/users/CreateAdmin'

const App = () => {

  const [authenticated, setAuthenticated] = useState(false)
  let protectedRestaurants

  useEffect(() => {
    if(localStorage.getItem('token')){
      setAuthenticated(true)
    }
})

//creating a function in App, in Home passing function as a prop
const onAuthenticated = (auth, token) => {
  setAuthenticated(auth)
  if(auth){
    localStorage.setItem('token', token)

  }
  else{
    localStorage.removeItem('token')

  }

}

//
if(authenticated){
  protectedRestaurants =(
  <>
  <Route path="/restaurants/create" element={<RestaurantsCreate /> } /> 
 
   <Route path="/restaurants/:id" element={<RestaurantsShow /> } /> 
   <Route path="/neighborhoods" element={<NeighborhoodsIndex />} />


  </>
  )
}

  return (
    <Router>
      <Navbar onAuthenticated={onAuthenticated} authenticated={authenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<RestaurantsIndex />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/update-preferences" element={<UpdatePreferences />} />

        {protectedRestaurants}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/createadmin" element={<CreateAdmin />} />
        
        <Route path="/login" element={<Login onAuthenticated={onAuthenticated} authenticated={authenticated} />} />
        <Route path="/register" element={<Register onAuthenticated={onAuthenticated} authenticated={authenticated} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

//* means show anything else that isn't one of the specified routes
export default App;
