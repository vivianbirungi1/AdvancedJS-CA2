//show one user by id

import { useParams } from 'react-router-dom'
//import axios from 'axios'
import axios from '../../config'
import { useEffect, useState } from 'react' //using hooks from react
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useNavigate  } from 'react-router';

const Show = props => {

    let navigate = useNavigate()

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

    const deleteUser = () => {
        console.log("delete test")
        console.log(user)
    
        //can just pass in form rather than specifing form fields - works for multiple different forms
        axios.delete('http://localhost:8001/users/delete', {_id: id}, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(response => {
          console.log(response.data)
         // props.onAuthenticated(true, response.data.auth_token);
          navigate('/users');
    
        })
        .catch(err => console.log(err))
      }

    if(!user) return null
  
    return (
      <div>
        <h2> {user.name}</h2>

        <p><b>Name:</b> {user.name} </p>
            <p><b>Email:</b> {user.email} </p>
            <Link to="/users"> <Button variant="contained">Back</Button></Link> |
            <Button onClick={deleteUser} variant="outlined">Delete</Button> 

            
      </div>
    )
  }
  
  export default Show