import Axios from "axios";

const axios = Axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_ENDPOINT,
  headers: { "Content-type": "application/json" },
});

export default axios;
