import axios from 'axios';
const KEY ='AIzaSyB-i9LTVhJzrkUUEWwGyWniquWg0GKxDrs';	

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet' ,
        maxResults: 5,
        key: KEY

    }
});