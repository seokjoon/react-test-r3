import axios from 'axios'
import r3Client from './r3Client'

const r3Api = {
  middleware: {
    getPost: id => axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`),
    getUsers: () => axios.get(`https://jsonplaceholder.typicode.com/users`),
  },
  user: {
    foo: () => r3Client.get('/api/articles?username=foo2&tag=foo'),
  },
}

export default r3Api


