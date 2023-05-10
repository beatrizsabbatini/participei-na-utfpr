import axios from "axios";

const api = axios.create({
  baseURL: "https://participei-na-utfpr-backend-beatrizsabbatini.vercel.app"
  // baseURL: "http://192.168.18.37:3333"
})

api.interceptors.request.use(request => {
  console.log('Starting Request');
  console.log(request);
  return request
})

export default api;