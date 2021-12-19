import Container from '@mui/material/Container';
//import * as React from 'react';
import { useEffect, useState } from 'react' //using hooks from react
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import axios from '../config'
import {Link} from 'react-router-dom';
//import AOS from "aos";
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';


const Home = props => {


    return (
      <Container>

        <div class="row">
        <div class="column card-space2">
      <div class="text-topmain">
        <Typography variant="h2">LATEST NEWS</Typography>
      </div>
      <div>
        <Typography variant="p">The next revolution of the restaurant industry has arrived: digital platforms are providing opportunity to operators allowing them to increase revenue by maximizing unused kitchen space. On this episode of Ghost Kitchen Trends podcast, I talk with Ajay Sunkara, co-founder and president of Nala Robotics about a robotic chef's capability and a fully robotic kitchen. 

Nala Robotics is a fully automatic robotic chef that can automate the entire cooking process.</Typography>
      </div>
      <div class="short-top">
      <Link to="/profile" style={{ textDecoration: 'none' }}> <Button color="warning" variant="contained">View Dashboard</Button> </Link>
     <Link to="/restaurants" style={{ textDecoration: 'none' }}> <Button color="warning" variant="outlined">Restaurants</Button> </Link> 
      </div>
      </div>

      <div class="column">
      <div class="image-top">
        <img class="fade-down" src="https://cdn.dribbble.com/users/2008861/screenshots/16644445/media/dc5b855f68e6fc06ba24054298c8488f.gif" 
        height="450"
        width="650" />
      </div>
      </div>
      </div>

      {/* cards */}

      <div class="text-space div-spacing">
        <Typography variant="h5">POPULAR RECIPES</Typography>
      </div>
      <div class="row short-top">
        <div class="col-2 card-space">
        <Card sx={{ maxWidth: 280 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://cdn.dribbble.com/users/3320958/screenshots/15778281/media/08b44583438e4ffd3cce0426e0ca68f1.jpeg?compress=1&resize=1200x900"
        alt="green iguana"
      />

      {/* second card */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Cornbread
        </Typography>
        <Typography variant="body2" color="text.secondary">
50g butter, plus extra for greasing
1 small onion, finely chopped
225g fine cornmeal
140g plain flour.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </div>
        <div class="col-2 card-space">
        <Card sx={{ maxWidth: 280 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://cdn.dribbble.com/users/3320958/screenshots/14931542/media/2db71435c140f00bb5322c9b920d1f6c.jpeg?compress=1&resize=1200x900"
        alt="green iguana"
      />

      {/* third card */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Simple Sushi
        </Typography>
        <Typography variant="body2" color="text.secondary">
        STEP 1:
        Pat out some rice. Lay a nori sheet on the mat, shiny-side down. Dip your hands in the vinegared water.  </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </div>
        <div class="col-2 card-space">
        <Card sx={{ maxWidth: 280 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://cdn.dribbble.com/users/3320958/screenshots/15955423/media/ec2fe461084339c3a4d14efae1202847.jpeg?compress=1&resize=1200x900"
        alt="green iguana"
      />

      {/* fourth card */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Stir-Fry
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Add the veg and toss to coat. Fry for 2-3 mins, then add the soy sauce and chilli sauce, if using, and mix well. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </div>
        <div class="col-2 card-space">
        <Card sx={{ maxWidth: 280 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://cdn.dribbble.com/users/3320958/screenshots/15084769/media/0035044b4c0e10642b17bbdd4898955c.jpeg?compress=1&resize=1200x900"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Pizza Margerita
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Make the sauce: Mix the passata, basil and crushed garlic together, then season to taste.
        </Typography>
      </CardContent>
      <CardActions>
        <Button  size="small">Share</Button>
        <Button  size="small">Learn More</Button>
      </CardActions>
    </Card>
        </div>
        
      </div>


<div class="div-spacing">
        <Typography variant="h4">CURRENT FOODIE NEWS</Typography>
      
      </div>
    

 
      <div class="row short-top">
              
      <div class="col-6">
      <div >
        <img src="https://cdn.dribbble.com/users/895570/screenshots/16275491/media/092061210b16e1779e3830a6b667e46b.gif" 
        height="450"
        width="650" />
      </div>
      </div>



      <div class="col-6 card-space ">
      <div class="centertext">
      <Stack sx={{ marginLeft: "45%"}} direction="row" spacing={2}>
      <Avatar  sx={{ bgcolor: deepOrange[500] }}>R</Avatar>
    </Stack>
      </div>
      <div class="short-top">
        <Typography variant="p">Hugo’s Restaurant in the heart of Dublin City said they were devastated after making the difficult decision.

In a statement, they said: “Devastated to have made the very difficult decision to close our beloved Hugo’s after lunch on Xmas Eve until February, OR when restrictions are lifted & we can trade properly. The entire broken-hearted Hugo’s family want to thank you for your overwhelming support xx”.</Typography>
      
      </div>

      <div class="short-top">
        <Typography variant="p">One person wrote: “Gina & your team, I am just so sad to learn that you are closing temporarily as a result of the recent restrictions. I fully appreciate the mental torture to make your decision. So hard to keep going back to the same well. </Typography>
      
      </div>

      <div class="short-top">
        <Typography variant="p">The news comes after The Department of Health recorded a further 7,333 new cases of Covid-19 on Saturday, with 410 people now being treated in hospital, 107 of whom are in ICU.</Typography>
      
      </div>

      <div class="short-top">
     <Link to="/restaurants" style={{ textDecoration: 'none' }}> <Button color="warning" variant="contained">Restaurants</Button> </Link> 
      </div>

      </div>
      </div>

      <div class="row div-spacing">
    <Typography variant="h5">Find Restaurants Near You</Typography>
    </div>




    {/* map */}
      <div class="row">
        <div class="col content-spacing">
    <LoadScript
        googleMapsApiKey="AIzaSyDcWOjI4Ioyzx6BVIRJSCCjmx5Y_4h_ZrY"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          width={1000}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
      </div>
      </div>


      
      </Container>
    )
  }

  const containerStyle = {
    width: '1150px',
    height: '400px'
  };
  
  const center = {
    lat: 53.3497645,
    lng: -6.2602732
  };
  
  export default Home