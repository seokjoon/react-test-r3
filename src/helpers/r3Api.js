import axios from 'axios'
import r3Client from './r3Client'

const r3Api = {}

r3Api.article = {
  createItem: ({ ...rest }) => r3Client.post('/api/articles', { ...rest }),
  // deleteItem: (id) => r3Client.delete('/api/articles/' + id),
  readItem: (id) => r3Client.get('/api/articles/' + id),
  readItems: ({ ...rest }) => r3Client.get('/api/articles', { params: { ...rest } }), //rest: limit, page, tag, username
  // updateItem: (id) => r3Client.put('/api/articles/' + id),
}

r3Api.middleware = {
  getPost: id => axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`),
  getUsers: () => axios.get(`https://jsonplaceholder.typicode.com/users`),
}

r3Api.user = {
  checkToken: () => r3Client.get('/api/usersCheckToken'),
  create: ({ password, username, }) => r3Client.post('/api/users', {
    password,
    username,
  }),
  createToken: ({ password, username, }) => r3Client.post('/api/usersCreateToken', {
    password,
    username,
  }),
  destroyToken: () => r3Client.post('/api/usersDestroyToken')
}

export default r3Api


