import axios from "axios";
import API from "../constants/apis";

const Axios = axios.create({
  baseURL: API.BASE_URL,
});

// Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export { Axios };
