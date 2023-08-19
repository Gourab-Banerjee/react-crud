import axios from "axios";
const url = "http://localhost:4000/users";

export const getData = async (id) => {
  id = id || "";
  return await axios.get(`${url}/${id}`);
};

export const addData = async (input) => {
  return await axios.post(url, input);
};

export const deleteData = async (id) => {
  return await axios.delete(`${url}/${id}`);
};

export const updateData = async (id, input) => {
  return await axios.put(`${url}/${id}`, input);
};
