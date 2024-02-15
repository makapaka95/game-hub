import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1a774b6c472e41e7afeb8e38d851f408'
    }
})

