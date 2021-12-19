//show one restaurant by id

import { useParams } from 'react-router-dom'
//import axios from 'axios'
import { useEffect, useState } from 'react' //using hooks from react
import {Link} from 'react-router-dom'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import React from 'react';
import axios from '../../config'
import {TextField, Button} from '@mui/material';
import { useNavigate  } from 'react-router';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  
  

const Show = () => {

  let navigate = useNavigate()

  const deleteRestaurants = () => {
    console.log(restaurant)

    //can just pass in form rather than specifing form fields - works for multiple different forms
    axios.delete(`/restaurants/${id}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(response => {
      console.log(response.data.restaurant)
     // props.onAuthenticated(true, response.data.auth_token);
      navigate('/restaurants');

    })
    .catch(err => console.log(err))
  }


  // modal states to control the open and close functionality
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let { id } = useParams()
    const [restaurant, setRestaurant] = useState(null)

    let token = localStorage.getItem('token')

    useEffect(() => {
        axios.get(`/restaurants/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(response => {
             console.log(response.data.restaurant)
            setRestaurant(response.data.restaurant)
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        })
    },[id])

    if(!restaurant) return null
  
    return (
        <Container>
        
      <div class="short-top">
        <Typography variant="h2"> {restaurant.name}</Typography>
        </div>

        <div class="short-top">
        <img src="https://cdn.dribbble.com/users/5950507/screenshots/14543756/media/3cf8ea17f7e1a1b04c56e8b82f8b1a28.gif?compress=1&resize=1150x350"></img>
        
      </div>

       

        <div class="centertext short-top">
        <Button color="warning" onClick={handleOpen} variant="contained">Book Now</Button>
        <Button color="warning" onClick={deleteRestaurants} variant="outlined">Delete</Button> 

        </div>


{/* pop up modal for booking */}
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Date and Time:
          </Typography>
          <div className="form-group">
        <TextField
        id="datetime-local"
        label="Start Date"
        type="datetime-local"
        variant="standard"
        name="start_date"
        InputLabelProps={{
          shrink: true,
        }}
        /> 
      </div>
      <div class="short-top">
          <Button color="warning" onClick={handleClose} variant="contained">Submit</Button>

          </div>
        </Box>
      </Modal>


{/* card row for cuisines */}
            <div class="div-spacing centertext">
            <Typography variant="h5">Specialty: </Typography>
            </div>

            <div class="centertext" >
            <Typography variant="h6"> {restaurant.cuisine} </Typography>
            </div>

            {/* cards */}
      <div class="row short-top">
        <div class="col-2 card-space">
        <Card sx={{ maxWidth: 280 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://cdn.dribbble.com/users/160641/screenshots/14477570/media/89b37143200c0a153e6b16441b021be1.gif"
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
        image="https://cdn.dribbble.com/users/2008861/screenshots/15229706/media/b60d6e61e33e46d933dc33361cfddb41.gif"
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
        image="https://cdn.dribbble.com/users/160641/screenshots/10822233/media/b62dec37ce93d7336be542f66a1c0486.gif"
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
        image="https://cdn.dribbble.com/users/614270/screenshots/13802801/media/b78451513f771e068ef7fc0c31c6aefe.gif"
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


            <div class="div-spacing centertext">
            <Typography variant="h5">Location: </Typography>
            </div>
            <div class="centertext">
            <Typography variant="h6"> {restaurant.borough} </Typography>
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


    <div class="centertext content-spacing">
      <Link to="/restaurants" style={{ textDecoration: 'none' }}> <Button color="warning" variant="contained">Back</Button> </Link> 
      <Link to="update-preferences" style={{ textDecoration: 'none' }}> <Button color="warning" variant="outlined">Update</Button> </Link>
      </div>

            
            
    
      </Container>
    )
  }

  const containerStyle = {
    width: '1150px',
    height: '400px'
  };
  
  const center = {
    lat: 40.7896239,
    lng: -73.9598939
  };
  
  export default Show