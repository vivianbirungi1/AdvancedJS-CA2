//show one user by id
import { useParams } from 'react-router-dom'
import axios from '../../config'
import { useEffect, useState } from 'react' //using hooks from react
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useNavigate  } from 'react-router';
import Container from '@mui/material/Container';

const Show = () => {

    let navigate = useNavigate()

    const deleteUsers = () => {
        console.log(user)
    
        axios.delete(`/users/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(response => {
          console.log(response.data.user)
         // props.onAuthenticated(true, response.data.auth_token);
          navigate('/users');
    
        })
        .catch(err => console.log(err))
      }

    let { id } = useParams()
    const [user, setUser] = useState(null)

    let token = localStorage.getItem('token')


    useEffect(() => {
        axios.get(`/users/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(response => {
            console.log(response.data.user)
            setUser(response.data.user)
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        })
    },[id])

    if(!user) return null
  
    return (
      <Container>
          <div class="short-top">
        <Typography variant="h2"> {user.name}</Typography>
        </div>

        <div class="short-top">
        <img src="https://cdn.dribbble.com/users/2155131/screenshots/15055519/media/5b0c4b944fad582e1fa8e10d59421ddc.jpg?compress=1&resize=1150x350"></img>
        
      </div>

      <div class="short-top">
        <Typography variant="h2"> Information</Typography>
        </div>

        <div class="short-top">
        <Typography variant="h6"> <b>Name:</b> {user.name}</Typography>
        </div>
        <div class="short-top">
        <Typography variant="h6"> <b>Email:</b> {user.email} </Typography>
        </div>


            <div class="centertext short-top content-spacing">
        <Link style={{ textDecoration: 'none' }} to="/users"> <Button color="warning" variant="contained">Back</Button></Link>
            <Button color="warning" onClick={deleteUsers} variant="outlined">Delete</Button> 

        </div>
           

            
      </Container>
    )
  }
  
  export default Show