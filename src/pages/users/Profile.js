import {Link} from 'react-router-dom'

const Profile = () => {
  
    return (
      <div>
        <h2>Profile</h2>

        <Link to="/update-preferences">Update Preferences</Link> | 
        <Link to="/createadmin">Create Admin</Link> | 
      </div>
    )
  }
  
  export default Profile