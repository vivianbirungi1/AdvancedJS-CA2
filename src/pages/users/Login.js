import { useState } from 'react' 
import axios from 'axios'
import {TextField, Button} from '@mui/material';

//check if auth is true
//creating component for login form

const Login = props => {

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

    //can just pass in form rather than specifing form fields - works for multiple different forms
    axios.post('http://localhost:8001/users/login', {
      name: form.name,  
      email: form.email,
      password: form.password
    })
    .then(response => {
      console.log(response.data.auth_token)
      props.onAuthenticated(true, response.data.auth_token);
    })
    .catch(err => console.log(err))
  }

  let styles = {
    backgroundColor: "yellow",
    fontWeight: "bold"
  }

  return (
    <>
      <h2>Login</h2>
      {/* {!props.authenticated ? <Login onAuthenticated={props.onAuthenticated} /> : "" } */}

      <div className="form-group">
        <TextField label="Name" variant="outlined" name= "name" onChange={handleForm} /> <br />
        </div>

        <div className="form-group">
        <TextField label="Email" variant="outlined" name= "email" onChange={handleForm} /> <br />
        </div>

        <div className="form-group">
        <TextField label="Password" variant="outlined" type="password" name= "password" onChange={handleForm} />
        </div>

      <br />

      {/* <button style={styles} onClick={submitForm}>Submit</button> */}

      <Button onClick={submitForm} variant="contained">Submit</Button>


    </>
  )
}

export default Login