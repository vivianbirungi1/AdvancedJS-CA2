import Container from '@mui/material/Container';
//import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {TextField, Button} from '@mui/material';
import {Link} from 'react-router-dom';
import React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

const Contact = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
    return (
      <Container>

      <div class="header-text">
        <Typography variant="h2">Contact</Typography>
      </div>

      <div class="row short-top">
          <img src="https://cdn.dribbble.com/users/942818/screenshots/14298779/media/df63155f61b2e7fa45a2b052b2c1965e.jpg?compress=1&resize=1150x350"></img>
        </div>

  
      <div className="form-group form-top">
        <TextField label="Name" fullWidth sx={{ s: 1 }} variant="standard" name= "name" /> <br />
        </div>
       

        <div className="form-group form-top">
        <TextField label="Email" fullWidth sx={{ s: 1 }} variant="standard" name= "email" /> <br />
        </div>

        <div className="form-group form-top">
        <TextField label="Your Message" multiline rows="4" fullWidth sx={{ s: 1 }} variant="standard" name="yourmessage" />
        </div>

        <div class="content-spacing centertext">
      <Button onClick={handleOpen} variant="contained">Submit</Button>
     </div>

     <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Thank You!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Your message has been submitted. We will contact you soon
          </Typography>
        </Box>
      </Modal>
       
      


      </Container>
    )
  }
  
  export default Contact