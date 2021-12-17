import axios from 'axios'

export default axios.create({
    //baseURL: "http://localhost:8001"
   baseURL: "https://mongodb-rest-api-vivianbirungi.herokuapp.com"
})