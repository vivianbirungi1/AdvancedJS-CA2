//all restaurants
import axios from 'axios'
import { useEffect, useState } from 'react' //using hooks from react
import { Link } from 'react-router-dom'

const Index = () => {
    //by default useState is a blank array
    const [restaurants, setRestaurants] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:8001/restaurants')
        .then(response => {
            console.log(response.data.restaurants) //retrieving restaurant data
            setRestaurants(response.data.restaurants)
        })
        .catch(err => {
            console.log(`Error: ${err}`) //if you get an error, write it to log
        })
    }, [])


//when page loads no restaurants exist therefore its hard to load index value 0 below
//if restaurants is null return null otherwise return actual component
    if(!restaurants) return null

    //display all restaurants
    const restaurantsList = restaurants.map(restaurant => {
       return <div key={restaurant._id}>
           
           <p><b>Name:</b> <Link to={`/restaurants/${restaurant._id}`} >{restaurant.name}</Link> </p>
            <p><b>Location:</b> {restaurant.borough} </p>
            <p><b>Specialty:</b> {restaurant.cuisine} </p>
            <hr />
        </div>
    })


    return (
      <div>
        <h2>All Restaurants</h2>
        <p>This is the restaurants index page</p>
        {/* gets you first index within that array */}
        { restaurantsList } 
      </div>
    )
  }
  
  export default Index