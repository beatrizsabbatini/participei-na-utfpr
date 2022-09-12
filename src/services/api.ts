import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.28:3333"
})

api.interceptors.request.use(request => {
  console.log('Starting Request', JSON.stringify(request, null, 2))
  return request
})

export default api;