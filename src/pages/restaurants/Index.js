//all restaurants
import axios from 'axios'
import { useEffect, useState } from 'react' //using hooks from react
import { Link } from 'react-router-dom'
import React from 'react';
import {TextField, Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

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
           
            <div class="">
           <Typography variant="p"><b>Name:</b> <Link to={`/restaurants/${restaurant._id}`} >{restaurant.name}</Link> </Typography>
           </div>

            <div class="">
            <Typography variant="p"><b>Location:</b> {restaurant.borough} </Typography>
            </div>

            <div class="">
            <Typography variant="p"><b>Specialty:</b> {restaurant.cuisine} </Typography>
            </div>
            <hr />
        </div>
    })


    return (
        <Container>


      <div class="short-top">
        <Typography variant="h2">All Restaurants</Typography>
        </div>

        <div class="short-top">
        <img src="https://cdn.dribbble.com/users/2008861/screenshots/14293050/media/81c828595bd4135765fa3df8087dd467.gif?compress=1&resize=1150x350"></img>
        
      </div>

        <div class="centertext short-top">
        <Link to="create" style={{ textDecoration: 'none' }}> <Button variant="contained">Create a Restaurant</Button> </Link>
        </div>  

        {/* gets you first index within that array */}
        { restaurantsList } 
      

      </Container>
    )
  }
  
  export default Index