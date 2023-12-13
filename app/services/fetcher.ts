import axios from "axios";

export const axiosInstance = axios.create({ baseURL: "http://localhost:8080" });

const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);
// a promise-returning function to fetch your data

export default fetcher;
