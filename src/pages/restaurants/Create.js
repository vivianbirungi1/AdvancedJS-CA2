//create  a restaurant
import { useState } from 'react' 
import axios from '../../config'
import { TextField, MenuItem, FormControl, Select, InputLabel, Button } from '@mui/material';
//import { LocalizationProvider, DateTimePicker } from '@mui/lab'
//import DateAdapter form '@mui/lab/AdapterMoment'
import { useNavigate  } from 'react-router';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Link} from 'react-router-dom'


const Create = () => {

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
    axios.post(`/restaurants`, form, {
      headers: {
        "Authorization": `Bearer ${token}`
    }
    })
    .then(response => {
      console.log(response.data)
      navigate(`/restaurants/${response.data.restaurantResponse.insertedId}`);
      //props.onAuthenticated(true, response.data.token);
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
        <Typography variant="h2">Create Restaurant</Typography>
      </div>

      <div class="short-top">
        <img src="https://cdn.dribbble.com/users/2008861/screenshots/15710250/media/44da8914930d23f079a467e2eff5bdd3.gif?compress=1&resize=1150x350"></img>
        
      </div>

      <div className="form-group form-top">
      <TextField label="Name" fullWidth sx={{ s: 1 }} variant="standard" name="name" onChange={handleForm} /> <br />
      </div>

      <div className="form-group form-top">
      <TextField label="Borough" fullWidth sx={{ s: 1 }} variant="standard" name="borough" onChange={handleForm} /> <br />
      </div>

      <div className="form-group form-top">
      <TextField label="Cuisine" fullWidth sx={{ s: 1 }} variant="standard" name="cuisine" onChange={handleForm} /> <br />
      </div>

      {/* <div className="form-group form-top">
      <TextField label="Building" fullWidth sx={{ s: 1 }} multiline rows="4" variant="standard" name="building" onChange={handleForm} /> <br />
      </div> */}

      {/* <div className="form-group form-top">
      <TextField label="Co-ordinates" fullWidth sx={{ s: 1 }} multiline rows="4" variant="standard" name="coord" onChange={handleForm} /> <br />
      </div>

      <div className="form-group form-top">
      <TextField label="Street" fullWidth sx={{ s: 1 }} multiline rows="4" variant="standard" name="street" onChange={handleForm} /> <br />
      </div>

      <div className="form-group form-top">
      <TextField label="Zip Code" fullWidth sx={{ s: 1 }} multiline rows="4" variant="standard" name="zipcode" onChange={handleForm} /> <br />
      </div> */}


      {/* <div class="header-text">
        <Typography variant="h3">Rating:</Typography>
      </div> */}

      {/* <div className="form-group form-top">
        <TextField
        id="datetime-local"
        label="Date"
        type="datetime-local"
        variant="standard"
        name="date"
        fullWidth sx={{ s: 1 }}
        onChange={handleForm}
        InputLabelProps={{
          shrink: true,
        }}
        /> 
      </div> */}

      {/* <div className="form-group form-top">
      <TextField label="Grade" fullWidth sx={{ s: 1 }} multiline rows="4" variant="standard" name="grade" onChange={handleForm} /> <br />
      </div>

      <div className="form-group form-top">
      <TextField label="Score" fullWidth sx={{ s: 1 }} multiline rows="4" variant="standard" name="score" onChange={handleForm} /> <br />
      </div> */}

{/* //////////////////////////////// */}

      {/* <div className="form-group">
      <FormControl variant="filled" fullWidth>
        <InputLabel id="city-select-label">City</InputLabel>
        <Select labelId="city-select-label" onChange={handleForm}>
          <MenuItem value="dublin">Dublin</MenuItem>
          <MenuItem value="vancouver">Vancouver</MenuItem>
          <MenuItem value="london">London</MenuItem>
          <MenuItem value="new york">New York</MenuItem>
          <MenuItem value="galway">Galway</MenuItem>
        </Select>
      </FormControl>
      </div> */}

      {/* <LocalizationProvider dateAdapter={DateAdapter}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="Start Date"
          name="start_date"
          value={value}
          onChange={handleForm}
        />

      </LocalizationProvider> */}

      {/* <div className="form-group">
        <TextField
        id="datetime-local"
        label="Start Date"
        type="datetime-local"
        variant="filled"
        name="start_date"
        onChange={handleForm}
        InputLabelProps={{
          shrink: true,
        }}


        /> 
      </div> */}




      <br />

      {/* <button style={styles} onClick={submitForm}>Submit</button> */}


      <div class="content-spacing centertext">
      <Link to="/restaurants" style={{ textDecoration: 'none' }}> <Button variant="contained">Back</Button> </Link> 
      <Button onClick={submitForm} variant="outlined">Submit</Button>
      </div>

      </Container>
    )
  }
  
  export default Create