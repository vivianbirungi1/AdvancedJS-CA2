//create  a restaurant
import { useState } from 'react' 
import axios from '../../config'
import { TextField, MenuItem, FormControl, Select, InputLabel, Button } from '@mui/material';
//import { LocalizationProvider, DateTimePicker } from '@mui/lab'
//import DateAdapter form '@mui/lab/AdapterMoment'
import { useNavigate  } from 'react-router';

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
    axios.post('/restaurants', form, {
      headers: {
        "Authorization": `Bearer ${token}`
    }
    })
    .then(response => {
      console.log(response.data)
      navigate(`/restaurants/${response.data._id}`);
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
        <h2>Create a new Restaurant</h2>

      <div className="form-group">
      <TextField label="Name" variant="filled" name="name" onChange={handleForm} /> <br />
      </div>

      <h3>Address:</h3>

      <div className="form-group">
      <TextField label="Building" multiline rows="4" variant="filled" name="building" onChange={handleForm} /> <br />
      </div>

      <div className="form-group">
      <TextField label="Co-ordinates" multiline rows="4" variant="filled" name="coord" onChange={handleForm} /> <br />
      </div>

      <div className="form-group">
      <TextField label="Street" multiline rows="4" variant="filled" name="street" onChange={handleForm} /> <br />
      </div>

      <div className="form-group">
      <TextField label="Zip Code" multiline rows="4" variant="filled" name="zipcode" onChange={handleForm} /> <br />
      </div>

      <div className="form-group">
      <TextField label="Borough" multiline rows="4" variant="filled" name="borough" onChange={handleForm} /> <br />
      </div>

      <div className="form-group">
      <TextField label="Cuisine" multiline rows="4" variant="filled" name="cuisine" onChange={handleForm} /> <br />
      </div>

      <h3>Rating:</h3>

      <div className="form-group">
        <TextField
        id="datetime-local"
        label="Date"
        type="datetime-local"
        variant="filled"
        name="date"
        onChange={handleForm}
        InputLabelProps={{
          shrink: true,
        }}


        /> 
      </div>

      <div className="form-group">
      <TextField label="Grade" multiline rows="4" variant="filled" name="grade" onChange={handleForm} /> <br />
      </div>

      <div className="form-group">
      <TextField label="Score" multiline rows="4" variant="filled" name="score" onChange={handleForm} /> <br />
      </div>



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

      <Button onClick={submitForm} variant="contained">Submit</Button>
      </>
    )
  }
  
  export default Create