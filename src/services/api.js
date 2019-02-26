import axios from 'axios';
/*import App from '../App';*/
const api = axios.create({baseURL: 'https://rocketseat-node.herokuapp.com/api'})

export default api;