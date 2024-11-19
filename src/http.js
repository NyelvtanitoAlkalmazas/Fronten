import axios from "axios";

const myAxios = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  timeout: 10000,
});

export const fetchData = async (route) => {
  const data = await myAxios.get(route);

  return data;
};
