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
        <Typography variant="h2">Profile</Typography>
        </div>

        <div class="row short-top">
    
      <div class="col-6">
      <div class="image-top">
        <img class="imageradius" src="https://cdn.dribbble.com/users/1202728/screenshots/4166158/media/5e4e7086c94960c6239de0ee9f64b2a4.gif" 
        height="450"
        width="650" />
      </div>
      </div>

      <div class="col-6 card-space text-top">
      <div>
      <Link to="/users">All Staff</Link>      
      </div>
      </div>
      </div>


        
      </Container>
    )
  }
  
  export default Profile