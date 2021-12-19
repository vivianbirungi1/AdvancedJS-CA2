// imports for react and material ui components
import { useLocation } from 'react-router-dom'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const PageNotFound = () => {

  // defining loaction - location pathname specified below to show user which location they are on when they are redirected to 404 page. returns what the wrong url was 
  let location = useLocation();

  console.log(location)

  return (

    // box overlaying image
    <Container>
      <div class="image-top">
<Card sx={{ maxWidth: 1100 }}>
  <Box sx={{ position: 'relative' }}>
  <Typography variant="h2">Sorry, 404 the page {location.pathname} was not found</Typography>

  <div class="content-spacing centertext">
  <Link to="/" style={{ textDecoration: 'none' }}> <Button variant="outlined">Back to Home</Button> </Link> 
  </div>


    <CardMedia
      component="img"
      height="500"
      image="https://cdn.dribbble.com/users/1600801/screenshots/3305058/media/ff1e7d87851f5ce92a5997da93d9da34.gif?compress=1&resize=1200x900"
    />
  </Box>
</Card>
</div>

    {/* <div>
      <h2>Sorry, 404 the page {location.pathname} was not found</h2>
    </div> */}
    </Container>
  )
}

export default PageNotFound