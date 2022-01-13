import axios from 'axios';


export default axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    params: {
        part : 'snippet',
        maxResult: process.env.REACT_APP_MAX_RESULTS,
        key: process.env.REACT_APP_YOUTUBE_API
    }
})