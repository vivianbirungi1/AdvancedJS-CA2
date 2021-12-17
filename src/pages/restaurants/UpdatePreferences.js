//edit  a restaurant
import { useState, useEffect } from 'react' 
//import axios from 'axios'
import { TextField, MenuItem, FormControl, Select, InputLabel, Button } from '@mui/material';
//import { LocalizationProvider, DateTimePicker } from '@mui/lab'
//import DateAdapter form '@mui/lab/AdapterMoment'
import { useNavigate, useParams  } from 'react-router';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Link} from 'react-router-dom';
import axios from '../../config';

const UpdatePreferences = () => {
  

  let navigate = useNavigate()
  let { id } = useParams()

  const [form, setForm] = useState({})
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
      //  navigate(`/profile/${response.data._id}`);
          setRestaurant(response.data.restaurant)
          setForm(response.data.restaurant)
      })
      .catch(err => {
          console.log(`Error: ${err}`)
      })
  }, [id, token])

 
  // useEffect(() => (
  //   setForm({
  //     name: restaurant.name,
  //     cuisine: restaurant.cusine,
  //     borough: restaurant.borough,
  //     restaurant_id: restaurant_id
  //   })
  // ), [restaurant])

  if(!restaurant) return null


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
    axios.put(`/restaurants/${id}`, form, {
      headers: {
        "Authorization": `Bearer ${token}`
    }
    })
    .then(response => {
      console.log(response.data.restaurant)
      navigate(`/restaurants/${id}`);

      //
     // setAuthenticated(true)
    })
    .catch(err => console.log(err))
  }

  // let styles = {
  //   backgroundColor: "yellow",
  //   fontWeight: "bold"
  // }

  // const Loading = () => {
  //   return(<div className="form-group">Loading...</div>)
  // }

    return (
      <Container>

      <div class="header-text">
        <Typography variant="h2">Update Restaurant</Typography>
        </div>

        <div class="short-top">
        <img src="https://cdn.dribbble.com/users/2008861/screenshots/15229706/media/b60d6e61e33e46d933dc33361cfddb41.gif?compress=1&resize=1150x350"></img>
        
      </div>

        {/* conditionally rendering form with if statement */}

        <div className="form-group form-top">
      <TextField label="Name" fullWidth sx={{ s: 1 }} variant="standard" name="name" onChange={handleForm} value={form.name} InputLabelProps = {{shrink:true,}} /> <br />
      </div>

      <div className="form-group form-top">
      <TextField label="Borough" fullWidth sx={{ s: 1 }}  variant="standard" name="borough" onChange={handleForm} value={form.borough} InputLabelProps = {{shrink:true,}} /> <br />
      </div>

      <div className="form-group form-top">
      <TextField label="Cuisine" fullWidth sx={{ s: 1 }} variant="standard" name="cuisine" onChange={handleForm} value={form.cuisine} InputLabelProps = {{shrink:true,}} /> <br />
      </div>

      <div className="form-group form-top">
      <TextField label="RestaurantID" fullWidth sx={{ s: 1 }} variant="standard" name="restaurant_id" onChange={handleForm} value={form.restaurant_id} InputLabelProps = {{shrink:true,}} /> <br />
      </div>



      

      {/* <div className="form-group">
      <TextField label="Email" variant="filled" name="email" onChange={handleForm} value={form.email} InputLabelProps={{
          shrink: true,
        }} /> <br />
      </div> */}

      {/* <div className="form-group">
      <TextField label="Password" type="password" variant="filled" name="password" onChange={handleForm} value={form.password} InputLabelProps={{
          shrink: true,
        }} /> <br />
      </div> */}

      {/* <div className="form-group">
      <TextField label="Email" multiline rows="4" variant="filled" name="email" onChange={handleForm} value={restaurant.email} InputLabelProps={{
          shrink: true,
        }} /> <br />
      </div> */}

      {/* <div className="form-group" value={restaurant.grades} InputLabelProps={{
          shrink: true,
        }}>
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

      {/* <div className="form-group" value={restaurant.start_date}> 
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

      {/* <div className="form-group" value={restaurant.end_date}>
        <TextField
        id="datetime-local"
        label="End Date"
        type="datetime-local"
        variant="filled"
        name="end_date"
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
  
  export default UpdatePreferences