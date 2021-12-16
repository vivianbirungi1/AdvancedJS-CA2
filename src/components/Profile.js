import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Profile = () => {

//   let { id } = useParams()
//   const [user, setUser] = useState(null)

//   let token = localStorage.getItem('token')

//   useEffect(() => {
//     axios.get(`http://localhost:8001/users/${id}`, {
//         headers: {
//             "Authorization": `Bearer ${token}`
//         }
//     })
//     .then(response => {
//         console.log(response.data.user)
//         setUser(response.data.user)
//     })
//     .catch(err => {
//         console.log(`Error: ${err}`)
//     })
// })

// if(!user) return null
  
    return (
      <div>
        <h2>Profile</h2>

        {/* <p>{user.name}</p> */}

        {/* <Link to="/createadmin">Create Admin</Link> |  */}
        <Link to="/users">All Staff</Link> | 
        
      </div>
    )
  }
  
  export default Profile