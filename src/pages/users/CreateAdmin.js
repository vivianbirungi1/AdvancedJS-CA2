//create  a restaurant
import { useState } from 'react' 
import axios from '../../config'
import { TextField, MenuItem, FormControl, Select, InputLabel, Button } from '@mui/material';
//import { LocalizationProvider, DateTimePicker } from '@mui/lab'
//import DateAdapter form '@mui/lab/AdapterMoment'
import { useNavigate  } from 'react-router';


const CreateAdmin = () => {

  let navigate = useNavigate()

  const [form, setForm] = useState({})

  const handleForm = e => {
  
    setForm(prevState => ({
      ...prevState, //keeps track of previous state as changes happen
      [e.target.name] : e.target.value
    }))

    console.log(form)
  }


  const submitForm = () => {
    console.log(form)

    let token = localStorage.getItem('token')


    //can just pass in form
    axios.post('/users/make-admin', form, {
      headers: {
        "Authorization": `Bearer ${token}`
    }
    })
    .then(response => {
      console.log(response.data)
      navigate(`/profile/${response.data._id}`);
      //props.onAuthenticated(true, response.data.token);
    })
    .catch(err => console.log(err))
  }

  // let styles = {
  //   backgroundColor: "yellow",
  //   fontWeight: "bold"
  // }

  
    return (
      <>
        <h2>Add a new Staff Member</h2>

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

        <Button onClick={submitForm} variant="contained">Submit</Button>
      </>
    )
  }
  
  export default CreateAdmin