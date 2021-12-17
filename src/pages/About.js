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
     <Link to="/restaurants" style={{ textDecoration: 'none' }}> <Button variant="contained">View Restaurants</Button> </Link>
     <Link to="/" style={{ textDecoration: 'none' }}> <Button variant="outlined">Home</Button> </Link> 
     </div>
      </div>
      </div>

      <div class="row div-spacing text-space">
        <div class="col">
          <Typography variant="h4">Meet Our Team</Typography>
        </div>
      </div>


         {/* cards */}
      <div class="row short-top">
        <div class="col-2 card-space">
        <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="240"
        image="https://st2.depositphotos.com/1054749/6808/i/600/depositphotos_68088587-stock-photo-portrait-of-a-young-african.jpg"
        alt="person1"
      />
      {/* second card */}
      <CardContent>
        <Typography gutterBottom variant="p" component="div">
          Lisa Richards - Director
        </Typography>
      </CardContent>

    </Card>
        </div>
        <div class="col-2 card-space">
        <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="220"
        image="https://static8.depositphotos.com/1011643/1042/i/600/depositphotos_10422883-stock-photo-attractive-businesswoman.jpg"
        alt="person2"
      />
      {/* third card */}
      <CardContent>
        <Typography gutterBottom variant="p" component="div">
          Jamie Kent - Locations Manager
        </Typography>
      </CardContent>


    </Card>
        </div>
        <div class="col-2 card-space">
        <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="240"
        image="https://media.istockphoto.com/photos/m-happy-with-where-my-career-is-heading-picture-id1138617116?k=20&m=1138617116&s=612x612&w=0&h=0l3kXwNeAV7LvzYtgtu97mhWv4NpmOeW5R1Woej6aYY="
        alt="person3"
      />
      {/* fourth card */}
      <CardContent>
        <Typography gutterBottom variant="p" component="div">
          Jason Gold - Marketing
        </Typography>
      </CardContent>

    </Card>
        </div>
        <div class="col-2 card-space">
        <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="240"
        image="https://us.123rf.com/450wm/fizkes/fizkes1805/fizkes180500507/101556744-happy-asian-office-worker-in-formal-wear-smiling-to-camera-posing-for-company-business-catalogue-mak.jpg?ver=6"
        alt="person4"
      />
      <CardContent>
        <Typography gutterBottom variant="p" component="div">
          Hailey Smith - Social Media
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