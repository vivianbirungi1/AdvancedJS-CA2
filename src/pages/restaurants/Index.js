//all restaurants
//import axios from 'axios'
import { useEffect, useState } from 'react' //using hooks from react
import { Link } from 'react-router-dom'
import React from 'react';
import axios from '../../config'
import {TextField, Button, Grid} from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';


const Index = () => {
    //by default useState is a blank array
    const [restaurants, setRestaurants] = useState(null)

    useEffect(() => {
        axios.get('/restaurants')
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
    const restaurantsList = restaurants.map((restaurant) => {
       return (
 
           <Grid item  xs={12} md={3} key={restaurant._id}>
  
         <Card container={1} spacing={8} columns={3} sx={{ minWidth: 275 }}>
      <CardContent class="centertext">
      <Stack sx={{ marginLeft: "45%"}} direction="row" spacing={2}>
      <Avatar  sx={{ bgcolor: deepOrange[500] }}>R</Avatar>
    </Stack>
        <Typography class="short-top"  variant="p" component="div">
        <b>Name:</b> <Link class="link2" style={{ textDecoration: 'none' }} to={`/restaurants/${restaurant._id}`} >{restaurant.name}</Link>
        </Typography>
        <Typography  sx={{ mb: 1.5 }} color="text.secondary">
        <b>Location:</b> {restaurant.borough}
        </Typography>
        <Typography  variant="body2">
        <b>Specialty:</b> {restaurant.cuisine}
        </Typography>
      </CardContent>
      <CardActions class="centertext content-spacing">
      <Link class="link2" style={{ textDecoration: 'none' }} to={`/restaurants/${restaurant._id}`} ><Button color="warning" variant="outlined" size="small">View Restaurant</Button></Link>

      </CardActions>
    </Card>
    </Grid>
      
       )    
    })


    return (
        <Container>


      <div class="short-top">
        <Typography variant="h2">All Restaurants</Typography>
        </div>

        <div class="short-top">
        <img src="https://cdn.dribbble.com/users/2008861/screenshots/14293050/media/81c828595bd4135765fa3df8087dd467.gif?compress=1&resize=1150x350"></img>
        
      </div>

        <div class="centertext short-top content-spacing">
        <Link to="create" style={{ textDecoration: 'none' }}> <Button color="warning" variant="contained">Create a Restaurant</Button> </Link>
        <Link to="/" style={{ textDecoration: 'none' }}> <Button color="warning" variant="outlined">Home</Button> </Link> 

        </div>  
        

        {/* gets you first index within that array */}

<div class="short-top">
<Box>
        <Grid container spacing={1} columns={12}>
        { restaurantsList } 
        </Grid>
        </Box>
        </div>

        <div class="centertext short-top content-spacing">
        <Link style={{ textDecoration: 'none' }} to="/profile"> <Button color="warning" variant="contained">Dashboard</Button></Link>

        </div>
      

      </Container>
    )
  }
  
  export default Index