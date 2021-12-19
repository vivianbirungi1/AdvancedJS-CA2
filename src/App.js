// defining imports for components, pages and react states/router 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react';

//COMPONENTS
import Navbar from './components/Navbar'
import Register from './components/Register'
import Login from './components/Login';
import Profile from './components/Profile';

//PAGES
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';

//RESTAURANTS
import RestaurantsIndex from './pages/restaurants/Index';
import RestaurantsShow from './pages/restaurants/Show';
import RestaurantsCreate from './pages/restaurants/Create';


//USER
import UpdatePreferences from './pages/restaurants/UpdatePreferences';
import UsersIndex from './pages/users/Index';
import UsersShow from './pages/users/Show';

const App = () => {

  // use state allows us to have state variables within a function
  const [authenticated, setAuthenticated] = useState(false)
  // defining protected restaurants method for pages that need authentication
  let protectedRestaurants

  // getting the token stored in local storage and setting authenticated to true
  useEffect(() => {
    if(localStorage.getItem('token')){
      setAuthenticated(true)
    }
})

//creating a function in App, in Home passing function as a prop
// if auth is set then store the token in local storage otherwise remote the token
// this works for login/register/logout
const onAuthenticated = (auth, token) => {
  setAuthenticated(auth)
  if(auth){
    localStorage.setItem('token', token)

  }
  else{
    localStorage.removeItem('token')

  }

}

//pages shown if user is authenticated
if(authenticated){
  protectedRestaurants =(
  <>
  <Route path="/restaurants/create" element={<RestaurantsCreate /> } /> 
 
   <Route path="/restaurants/:id" element={<RestaurantsShow /> } /> 
   <Route path="/users/:id" element={<UsersShow /> } /> 

   {/* <Route path="/neighborhoods" element={<NeighborhoodsIndex />} /> */}


  </>
  )
}

// defining route paths, exported pages passed in as elements
  return (
    <Router>
      <Navbar onAuthenticated={onAuthenticated} authenticated={authenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<RestaurantsIndex />} />
        <Route path="/users" element={<UsersIndex />} />


        <Route path="/profile" element={<Profile />} />
        <Route path="/restaurants/:id/update-preferences" element={<UpdatePreferences />} />

        {protectedRestaurants}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/createadmin" element={<CreateAdmin />} /> */}
        
        <Route path="/login" element={<Login onAuthenticated={onAuthenticated} authenticated={authenticated} />} />
        <Route path="/register" element={<Register onAuthenticated={onAuthenticated} authenticated={authenticated} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

//* means show anything else that isn't one of the specified routes
export default App;
