//edit  a restaurant
import { useState, useEffect } from 'react' 
import axios from 'axios'
import { TextField, MenuItem, FormControl, Select, InputLabel, Button } from '@mui/material';
//import { LocalizationProvider, DateTimePicker } from '@mui/lab'
//import DateAdapter form '@mui/lab/AdapterMoment'
import { useNavigate, useParams  } from 'react-router';

const UpdatePreferences = () => {
  

  let navigate = useNavigate()
  let { id } = useParams()

  const [form, setForm] = useState({})
  const [restaurant, setRestaurant] = useState({})

  let token = localStorage.getItem('token')

  useEffect(() => {
      axios.put(`http://localhost:8001/restaurants/update-preferences/${id}`, {
          headers: {
              "Authorization": `Bearer ${token}`
          }
      })
      .then(response => {
          console.log(response.data)
          navigate(`/profile/${response.data._id}`);
         // setRestaurant(response.data)
         // setForm(response.data)
      })
      .catch(err => {
          console.log(`Error: ${err}`)
      })
  }, [id, token])

 
  useEffect(() => (
    setForm({
      name: restaurant.name,
      email: restaurant.email,
      password: restaurant.password
    })
  ), [restaurant])

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
    axios.post(`http://localhost:8001/restaurants/${id}`, form, {
      headers: {
        "Authorization": `Bearer ${token}`
    }
    })
    .then(response => {
      console.log(response.data)
      navigate(`/restaurants/${response.data._id}`);

      //
     // setAuthenticated(true)
    })
    .catch(err => console.log(err))
  }

  // let styles = {
  //   backgroundColor: "yellow",
  //   fontWeight: "bold"
  // }

  const Loading = () => {
    return(<div className="form-group">Loading...</div>)
  }

    return (
      <>
        <h2>Update Restaurant</h2>

        {/* conditionally rendering form with if statement */}

        {
          form.title ? (

            <TextField label="Name" variant="filled" name="name" onChange={handleForm} value={form.name} InputLabelProps={{
              shrink: true,
            }} /> 

     ) : (<Loading />)
        }

{
          form.email ? (

            <TextField label="Email" variant="filled" name="email" onChange={handleForm} value={form.email} InputLabelProps={{
              shrink: true,
            }} />

     ) : (<Loading />)
        }

{
          form.password ? (

            <TextField label="Password" type="password" variant="filled" name="password" onChange={handleForm} value={form.password} InputLabelProps={{
              shrink: true,
            }} />

     ) : (<Loading />)
        }

      

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

      <Button onClick={submitForm} variant="contained">Submit</Button>
      </>
    )
  }
  
  export default UpdatePreferences