import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//COMPONENTS
import Navbar from './components/Navbar'

//PAGES
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';

//RESTAURANTS
import RestaurantsIndex from './pages/restaurants/Index';
import RestaurantsShow from './pages/restaurants/Show';

//USER
import Login from './pages/Login';

const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<RestaurantsIndex />} />
        <Route path="/restaurants/:id" element={<RestaurantsShow />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

//* means show anything else that isn't one of the specified routes
export default App;
