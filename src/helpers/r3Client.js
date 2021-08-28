import axios from 'axios'


//const { REACT_APP_HOST_API_KOA, REACT_APP_PATH } = process.env


const r3Client = axios.create()
//r3Client.defaults.baseURL = REACT_APP_HOST_API_KOA + REACT_APP_PATH
r3Client.defaults.baseURL = process.env.REACT_APP_HOST_API_KOA
r3Client.defaults.headers.common['Authorization'] = 'Bearer foo'
r3Client.defaults.withCredentials = true


r3Client.interceptors.request.use(
  config => {
    // console.log('config req:', config)
    return config
  },
  err => {
    // console.log('err req:', err)
    return Promise.reject(err)
  },
)

r3Client.interceptors.response.use(
  res => {
    // console.log('res:', res)
    return res
  },
  err => {
    // console.log('err:', err)
    return Promise.reject(err)
  },
)


export default r3Client