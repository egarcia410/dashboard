import axios from 'axios'

// Creates and instance of axios, setting the base URL to link up with the backend
export default () => {
    if (location.port) {
        // For development
        var url = 'http://localhost:8081'
    } else {
        // For production
        var url = location.protocol + '//' + location.hostname;
    }
    return axios.create({
        baseURL: url
    })
}

// export const authInstance = axios.create({
//     baseURL:
// })