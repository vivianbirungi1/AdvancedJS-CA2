//all users
import axios from 'axios'
import { useEffect, useState } from 'react' //using hooks from react
import { Link } from 'react-router-dom'

const Index = () => {
    //by default useState is a blank array
    const [users, setUsers] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:8001/users')
        .then(response => {
            console.log(response.data.users) //retrieving user data
            setUsers(response.data.users)
        })
        .catch(err => {
            console.log(`Error: ${err}`) //if you get an error, write it to log
        })
    }, [])


//when page loads no users exist therefore its hard to load index value 0 below
//if users is null return null otherwise return actual component
    if(!users) return null

    //display all users
    const usersList = users.map(user => {
       return <div key={user._id}>
           
           <p><b>Name:</b> <Link to={`/users/${user._id}`} >{user.name}</Link> </p>
            <p><b>Email:</b> {user.email} </p>
            <hr />
        </div>
    })


    return (
      <div>
        <h2>All Staff</h2>
        {/* <Link to="createadmin">Add a new staff member</Link>   */}
        <p>These are all the current staff</p>
        {/* gets you first index within that array */}
        { usersList } 
      </div>
    )
  }
  
  export default Index