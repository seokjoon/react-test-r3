import axios from 'axios'

const r3Api = {
  middleware: {
    getPost: id => axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`),
    getUsers: () => axios.get(`https://jsonplaceholder.typicode.com/users`),
  }
}

export default r3Api


