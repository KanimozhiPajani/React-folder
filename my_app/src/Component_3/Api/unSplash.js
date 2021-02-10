import axios from 'axios';

export default axios.create(
    {
        baseURL : 'https://api.unsplash.com',
        headers:{
            Authorization:'Client-ID _julpuoRzF2I4AYywaA8b7HmzVadYGNaBoLq7Rge7GY'
        }
    }
)