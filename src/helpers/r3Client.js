import axios from 'axios'

const { REACT_APP_HOST_API_KOA, REACT_APP_PATH } = process.env
//console.log( process.env.NODE_ENV, REACT_APP_HOST_API_KOA, REACT_APP_PATH, )

const r3Client = axios.create()

r3Client.defaults.baseURL = REACT_APP_HOST_API_KOA + REACT_APP_PATH
r3Client.defaults.headers.common['Authorization'] = 'Bearer foo'

axios.interceptors.response.use(
  error => {
    return Promise.reject(error)
  },
  response => {
    return response
  },
)

export default r3Client