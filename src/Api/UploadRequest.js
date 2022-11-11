import axios from "axios";

const API = axios.create({ baseURL: "https://rezo-server.cyclic.app/" });

export const uploadImage = (data) => API.post("/upload/", data);
export const uploadPost = (data) => API.post("/post", data);
