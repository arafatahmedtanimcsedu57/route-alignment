import axios from 'axios'

export const getAvailableOutlets = () => console.log('available outlets')
export const getHistory = () => axios.get('http://127.0.0.1:8000/api/rewrite-routes/')
    .then(res => res.data)
    .then(data => data)