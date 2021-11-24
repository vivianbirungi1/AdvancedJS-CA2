//show one restaurant by id

import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react' //using hooks from react

const Show = () => {

    let { id } = useParams()
    const [restaurant, setRestaurant] = useState(null)

    let token = localStorage.getItem('token')

    useEffect(() => {
        axios.get(`http://localhost:8001/restaurants/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(response => {
            console.log(response.data)
            setRestaurant(response.data)
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        })
    })

    if(!restaurant) return null
  
    return (
      <div>
        <h2>this is the show page: {id}</h2>

        <p><b>Name:</b> {restaurant.name} </p>
            <p><b>Location:</b> {restaurant.borough} </p>
            <p><b>Specialty:</b> {restaurant.cuisine} </p>
      </div>
    )
  }
  
  export default Show