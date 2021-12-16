//show one user by id

import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react' //using hooks from react
import {Link} from 'react-router-dom'

const Show = () => {

    let { id } = useParams()
    const [user, setUser] = useState(null)

    let token = localStorage.getItem('token')

    useEffect(() => {
        axios.get(`http://localhost:8001/users/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(response => {
            console.log(response.data.user)
            setUser(response.data.user)
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        })
    })

    if(!user) return null
  
    return (
      <div>
        <h2> {user.name}</h2>

        <p><b>Name:</b> {user.name} </p>
            <p><b>Email:</b> {user.email} </p>
            <Link to="/users"> Back</Link> |
            
      </div>
    )
  }
  
  export default Show