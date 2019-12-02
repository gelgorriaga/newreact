import axios from 'axios';
const ACCESS = 'f39171f8d9afce7b00a17bdc8e38987f826ee64e1f3a9d047c8daae30479660c';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: `Client-ID ${ACCESS}` 
    }
});