import { useEffect, useState } from 'react' 
//import axios from 'axios'
import axios from '../../config'


const Logout = () => {

  
  useEffect(() => {

    let token = localStorage.getItem('token')

    //can just pass in form rather than specifing form fields - works for multiple different forms
    axios.post('http://localhost:8001/users/logout', {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(response => {
      console.log(response.data.token)
      localStorage.setItem('token', response.data.token)
    })
    .catch(err => console.log(err))
  })

  return (
    <div>


    </div>
  )
}

export default Logout