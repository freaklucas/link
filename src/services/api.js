// d31291f371afb8f6a430e34c8504ff33ac789572

import axios from "axios";

export const key = "d31291f371afb8f6a430e34c8504ff33ac789572";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4",
  headers: {
    Authorization: `Bearer ${key}`,
  },
});

export default api;
