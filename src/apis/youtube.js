import axios from 'axios'

const KEY = 'AIzaSyDylvVqiZnse867Coz0UPVj93oRcRRUbZw'
export default axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: '5',
        key: KEY
    }
})


