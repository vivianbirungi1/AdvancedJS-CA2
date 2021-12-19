//all users
//import axios from 'axios'
import { useEffect, useState } from 'react' //using hooks from react
import { Link } from 'react-router-dom'
import axios from '../../config'
import {TextField, Button, Grid} from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple } from '@mui/material/colors';

const Index = () => {
    //by default useState is a blank array
    const [users, setUsers] = useState(null)

    useEffect(() => {
        axios.get('/users')
        .then(response => {
            console.log(response.data.users) //retrieving user data
            setUsers(response.data.users)
        })
        .catch(err => {
            console.log(`Error: ${err}`) //if you get an error, write it to log
        })
    }, [])


//when page loads no users exist therefore its hard to load index value 0 below
//if users is null return null otherwise return actual component
    if(!users) return null

    //display all users
    const usersList = users.map((user) => {
       return (

        <Grid item  xs={12} md={3} key={user._id}>
         <Card container={1} spacing={8} columns={4} sx={{ minWidth: 275 }}>
         
      <CardContent class="centertext">
      <Stack sx={{ marginLeft: "45%"}} direction="row" spacing={2}>
      <Avatar  sx={{ bgcolor: deepPurple[500] }}>U</Avatar>
    </Stack>
        <Typography class="short-top" variant="h5" component="div">
        <b>Name:</b> <Link style={{ textDecoration: 'none' }} class="link2" to={`/users/${user._id}`} >{user.name}</Link>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <b>Email:</b> {user.email} 
        </Typography>
      </CardContent>
      <CardActions class="centertext content-spacing">
      <Link class="link2" style={{ textDecoration: 'none' }} to={`/users/${user._id}`}  ><Button color="warning" variant="outlined" size="small">View User</Button></Link>

      </CardActions>
    </Card>
    </Grid>
           

    )
    })


    return (
      <Container>


       <div class="short-top">
        <Typography variant="h2">All Staff</Typography>
        </div>

        <div class="short-top centertext">
        <img src="https://cdn.dribbble.com/users/1355613/screenshots/15799226/media/942dbcf92162c70a6659dc0117a8cb3f.jpg?compress=1&resize=1150x350"></img>
      </div>

      <div class="centertext short-top">
        <Link to="/" style={{ textDecoration: 'none' }}> <Button color="warning" variant="outlined">Home</Button> </Link> 

        </div>  


      <div class="short-top">
<Box>
        <Grid container spacing={1} columns={12}>
        { usersList } 
        </Grid>
        </Box>
        </div>

        <div class="centertext short-top content-spacing">
        <Link style={{ textDecoration: 'none' }} to="/profile"> <Button color="warning" variant="contained">Dashboard</Button></Link>

        </div>
       
      </Container>
    )
  }
  
  export default Index