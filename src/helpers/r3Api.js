import axios from 'axios'
import r3Client from './r3Client'

const r3Api = {
  middleware: {
    getPost: id => axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`),
    getUsers: () => axios.get(`https://jsonplaceholder.typicode.com/users`),
  },
  user: {
    checkToken: () => r3Client.get('/api/usersCheckToken'),
    create: ({ password, username, }) => r3Client.post('/api/usersCreate', {
      password,
      username,
    }),
    createToken: ({ password, username, }) => r3Client.post('/api/usersCreateToken', {
      password,
      username,
    }),
  },
}

export default r3Api


