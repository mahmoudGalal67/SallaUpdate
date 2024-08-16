import axios from "axios";

const client = axios.create({
  baseURL: "http://goservback.sallaplus.com/public",
});

export const request = ({ ...options }) => {
  return client(options);
  //   client.defaults.headers.common.Authorization = `Bearer token`;
  //   client.interceptors.request.use((config) => {
  //     config.headers["authorization"] = "Bearer ";
  //     return config;
  //   });
};
