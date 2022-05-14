import axios from "axios";

const api = axios.create({
  baseURL: "https://participei-na-utfpr-backend.herokuapp.com"
})

export default api;