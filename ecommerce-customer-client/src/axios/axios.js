import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://renetuku-ecommerce-cms-nw.herokuapp.com/'
  // baseURL: 'http://localhost:3000'
})

export default instance
