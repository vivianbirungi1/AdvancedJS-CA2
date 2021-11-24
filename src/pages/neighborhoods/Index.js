//all neighborhoods
import axios from 'axios'
import { useEffect, useState } from 'react' //using hooks from react
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Index = () => {
    //by default useState is a blank array
    let { id } = useParams()
    const [neighborhoods, setNeighborhoods] = useState(null)

    let token = localStorage.getItem('token')

    useEffect(() => {
        axios.get('http://localhost:8001/users/neighborhood-report', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(response => {
            console.log(response.data.report) //retrieving neighborhood data
            setNeighborhoods(response.data.report)
        })
        .catch(err => {
            console.log(`Error: ${err}`) //if you get an error, write it to log
        })
    }, [])


//when page loads no neighborhoods exist therefore its hard to load index value 0 below
//if neighborhoods is null return null otherwise return actual component
    if(!neighborhoods) return null

    //display all neighborhoods
    const neighborhoodsList = neighborhoods.map(neighborhood => {
       return <div key={neighborhood._id}>
           
            <p><b>Name:</b> {neighborhood.count} </p>
            <hr />
        </div>
    })


    return (
      <div>
        <h2>Your Neighborhood</h2>
        <p>This is your neighborhood index page</p>
        {/* gets you first index within that array */}
        { neighborhoodsList } 
      </div>
    )
  }
  
  export default Index