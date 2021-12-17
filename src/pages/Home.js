import Container from '@mui/material/Container';
//import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import axios from '../config'


const Home = props => {

    return (
      <Container>
        <div class="row">
        <div class="column card-space2">
      <div class="text-topmain">
        <Typography variant="h2">LARGE CATCHY HEADER</Typography>
      </div>
      <div>
        <Typography variant="p">I'm baby live-edge vinyl vice meggings fingerstache readymade +1 pug la croix distillery lomo. 
          Freegan microdosing vegan keffiyeh, kitsch kogi normcore williamsburg YOLO shoreditch raw denim 
          bicycle rights gentrify tbh. Chartreuse lomo tumeric la croix pop-up. Enamel pin drinking vinegar 
          woke, mumblecore street art pour-over banh mi sriracha flannel vaporware raw denim man braid narwhal 
          cold-pressed. Mumblecore tumeric shaman selfies YOLO. Shaman blog gentrify craft beer readymade edison bulb. 
          Banjo tousled viral occupy tumeric.</Typography>
      </div>
      <div class="short-top">
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      </div>
      </div>

      <div class="column">
      <div class="image-top">
        <img src="https://cdn.dribbble.com/users/2008861/screenshots/16644445/media/dc5b855f68e6fc06ba24054298c8488f.gif" 
        height="450"
        width="650" />
      </div>
      </div>
      </div>

      {/* cards */}

      <div class="text-space div-spacing">
        <Typography variant="h5">SMALL CATCHY HEADER</Typography>
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
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
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
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
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
        image="https://cdn.dribbble.com/users/3320958/screenshots/15955423/media/ec2fe461084339c3a4d14efae1202847.jpeg?compress=1&resize=1200x900"
        alt="green iguana"
      />

      {/* fourth card */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
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
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </div>
        
      </div>


 
      <div class="row div-spacing">
    
      <div class="col-6">
      <div class="image-top">
        <img src="https://cdn.dribbble.com/users/895570/screenshots/16275491/media/092061210b16e1779e3830a6b667e46b.gif" 
        height="450"
        width="650" />
      </div>
      </div>

      <div class="col-6 card-space text-top">
      <div>
        <Typography variant="h4">IDK WHAT WILL GO HERE YET.</Typography>
      
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