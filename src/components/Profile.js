import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
//import axios from 'axios'
import axios from '../config'
import { useEffect, useState } from 'react'

import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';

const Profile = () => {
  
    return (
      <Container>

        <div class="short-top centertext">
        <Typography variant="h2">Dashboard</Typography>
        </div>

 
    {/* cards */}
    <div class="row short-top">
        <div class="col-4 card-space">
        <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="240"
        image="https://cdn.dribbble.com/users/2187949/screenshots/15103717/media/e88d16db0dfa71456ea4efcee43e0c55.jpg?compress=1&resize=1200x900"
        alt="profile"
      />
      {/* second card */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <Link style={{ textDecoration: 'none' }} class="link2" to="/users">Staff</Link> 
        </Typography>
      </CardContent>

    </Card>
        </div>
        <div class="col-4 card-space">
        <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="240"
        image="https://cdn.dribbble.com/users/2187949/screenshots/15207330/media/d3413becb583b51571d9c8ee5184ad49.jpg?compress=1&resize=1200x900"
        alt="person2"
      />
      {/* third card */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <Link style={{ textDecoration: 'none' }} class="link2" to="/restaurants">Restaurants</Link> 

        </Typography>
      </CardContent>


    </Card>
        </div>
        <div class="col-4 card-space">
        <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="240"
        image="https://cdn.dribbble.com/users/2187949/screenshots/15382644/media/33bba895502f9bc3754573891dfd1b1d.jpg?compress=1&resize=1200x900"
        alt="person3"
      />
      {/* fourth card */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <Link style={{ textDecoration: 'none' }} class="link2" to="/about">About</Link> 

        </Typography>
      </CardContent>

    </Card>
        </div>

        
      </div>

      <div class="content-spacing centertext">
        <Link to="/" style={{ textDecoration: 'none' }}> <Button variant="outlined">Home</Button> </Link> 
     </div>

  
   
      </Container>
    )
  }
  
  export default Profile