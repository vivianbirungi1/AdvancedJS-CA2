import Container from '@mui/material/Container';
//import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import React from 'react';
import Typography from '@mui/material/Typography';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import axios from '../config'

const About = () => {

  //const DocsApiKeyInput= require("./DocsApiKeyInput").default; 

  return (
      

      <Container>

<div class="image-top">
<Card sx={{ maxWidth: 1100 }}>
  <Box sx={{ position: 'relative' }}>
  <Typography variant="h2">ABOUT US</Typography>

    <CardMedia
      component="img"
      height="500"
      image="https://cdn.dribbble.com/users/1090020/screenshots/16204638/media/a955684e185b9759dd4e6ba13fcc254d.png?compress=1&resize=1200x900"
    />
  </Box>
</Card>
</div>


<div class="row">
        <div class="column">
      <div class="short-top">
        <Typography variant="p">I'm baby live-edge vinyl vice meggings fingerstache readymade +1 pug la croix distillery lomo. 
          Freegan microdosing vegan keffiyeh, kitsch kogi normcore williamsburg YOLO shoreditch raw denim 
          bicycle rights gentrify tbh. Chartreuse lomo tumeric la croix pop-up. Enamel pin drinking vinegar 
          woke, mumblecore street art pour-over banh mi sriracha flannel vaporware raw denim man braid narwhal 
          cold-pressed. Mumblecore tumeric shaman selfies YOLO. Shaman blog gentrify craft beer readymade edison bulb. 
          Banjo tousled viral occupy tumeric.</Typography>
      </div>
      <div class="short-top">
     <Link to="/profile" style={{ textDecoration: 'none' }}> <Button color="warning" variant="contained">View Dashboard</Button> </Link>
     <Link to="/" style={{ textDecoration: 'none' }}> <Button variant="outlined">Home</Button> </Link> 
     </div>
      </div>
      </div>

      {/* <div class="row div-spacing text-space">
        <div class="col">
          <Typography variant="h4">Meet Our Team</Typography>
        </div>
      </div> */}


    {/*  */}
      <div class="row div-spacing">
       
        <div class="col-2 card-space">
        <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="220"
        image="https://cdn.dribbble.com/users/1040516/screenshots/15624895/media/e9c082aa2ddaa3d6f004f75076fa9ca3.png?compress=1&resize=800x600"
        alt="person2"
      />
      {/* third card */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         VEGAN
        </Typography>
        <Typography gutterBottom variant="p" component="div">
        Since opening in 2002 we at Red Bamboo have strived to redefine what it means to be vegan by creating innovative mock meat and seafood dishes. All cruelty and meat free and locally sourced
        </Typography>
      </CardContent>


    </Card>
        </div>
        <div class="col-2 card-space">
        <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="240"
        image="https://cdn.dribbble.com/users/1728242/screenshots/16886854/media/be2d5efce567088345e83d779b650598.jpg?compress=1&resize=1200x900"
        alt="person3"
      />
      {/* fourth card */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          VIP DINING
        </Typography>
        <Typography gutterBottom variant="p" component="div">
        Every year we add new vegan dishes from around the word. 2017 includes:

 

organic vegan fried eggs

breakfast sandwich

chicken and fish tacos

curry wings

teriyaki chicken bowl.
        </Typography>
      </CardContent>

    </Card>
        </div>
        <div class="col-2 card-space">
        <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="240"
        image="https://cdn.dribbble.com/users/1040516/screenshots/16107281/media/7ccc44357af7ffcd395b6b9e6f9fe24e.png?compress=1&resize=1200x900"
        alt="person4"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          EXCLUSIVE LOCATIONS
        </Typography>
        <Typography gutterBottom variant="p" component="div">
      
We are located in historic Greenwich Village half a block away from 

Washington Square Park.

 

140 West 4th Street

NY, NY 10012

(between 6th Ave. and

MacDougal St.)
        </Typography>
      </CardContent>
    </Card>
        </div>
        
      </div>

    <div class="row div-spacing">
    <Typography variant="h4">Find Restaurants Near You</Typography>
    </div>
      <div class="row content-spacing">
        
        <div class="col">
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

      {/* <DocsApiKeyInput/> */}

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
  
  export default About