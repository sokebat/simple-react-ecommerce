import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

 
export default  axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
})


export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true,
});