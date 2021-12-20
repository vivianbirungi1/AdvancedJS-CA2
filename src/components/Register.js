import { useState } from 'react' 
//import axios from 'axios'
import axios from '../config'
import {TextField, Button} from '@mui/material';
//import { useNavigate  } from 'react-router';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Link} from 'react-router-dom'
import { useNavigate  } from 'react-router';



//check if auth is true
//creating component for register form

const Register = props => {

  let navigate = useNavigate()

  const [form, setForm] = useState(false)

  const handleForm = e => {

    setForm(prevState => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))

    console.log(form)
  }
  
  const submitForm = () => {
    console.log(form)

  // let token = localStorage.setItem('token')

    //can just pass in form rather than specifing form fields - works for multiple different forms
    axios.post('/users/register', form, {
    //   headers: {
    //     "Authorization": `Bearer ${token}`
    // }
    })
    .then(response => {
      console.log(response.data.auth_token)
     // navigate(`/home/${response.data._id}`);
      props.onAuthenticated(true, response.data.auth_token);
      navigate('/');
    })
    .catch(err => console.log(err))
  }

  // let styles = {
  //   backgroundColor: "yellow",
  //   fontWeight: "bold"
  // }

  return (
    <Container>

      <div class="header-text">
        <Typography variant="h2">Register</Typography>
      </div>

      <div class="short-top">
        <img src="https://cdn.dribbble.com/users/1090020/screenshots/14013473/media/68bbb8d9cea07fee4062e140a7ff31af.png?compress=1&resize=1150x350"></img>
        
      </div>


        <div className="form-group form-top">
        <TextField label="Name" fullWidth sx={{ s: 1 }} variant="standard" name= "name" onChange={handleForm} /> <br />
        </div>

        <div className="form-group form-top">
        <TextField label="Email" fullWidth sx={{ s: 1 }} variant="standard" name= "email" onChange={handleForm} /> <br />
        </div>

        <div className="form-group form-top">
        <TextField label="Password" fullWidth sx={{ s: 1 }} variant="standard" type="password" name= "password" onChange={handleForm} />
        </div>

        <div class="short-top">
        <Typography variant="p">
          <Link to="/login" >Already exist? Login Now!</Link>
        </Typography>
        </div>

      <div class="content-spacing centertext">
      <Button color="warning" onClick={submitForm} variant="contained">Submit</Button>
      </div>

    </Container>
  )
}

export default Register