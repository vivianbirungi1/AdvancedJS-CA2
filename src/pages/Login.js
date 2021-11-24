import { useState } from 'react' 
import axios from 'axios'


const Home = () => {

  const [form, setForm] = useState({})

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
    axios.post('http://localhost:8001/users/login', form)
    .then(response => {
      console.log(response.data.token)
      localStorage.setItem('token', response.data.token)
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <h2>Login</h2>
      
      Full Name:  <input type="text" name= "name" onChange={handleForm} /> <br />
      Email:  <input type="text" name= "email" onChange={handleForm} /> <br />
      Password:  <input type="password" name= "password" onChange={handleForm} />

      <br />

      <button onClick={submitForm}>Submit</button>


    </div>
  )
}

export default Home