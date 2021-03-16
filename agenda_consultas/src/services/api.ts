import axios from 'axios'

const api = axios.create({
    baseURL: "https://apitesai.azurewebsites.net/swagger/v1/swagger.json"
})

export default api