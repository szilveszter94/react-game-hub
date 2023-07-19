import axios from "axios";

const SECRET_KEY = import.meta.env.VITE_SECRET

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: SECRET_KEY,
  },
});
