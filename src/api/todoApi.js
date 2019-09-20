import axios from "axios";

const baseUrl = "http://localhost:3001/api";

const getAll = () => {
  return axios.get(`${baseUrl}/todos`);
};

const add = text => {
  return axios.post(`${baseUrl}/todo`, { text });
};

const update = todo => {
  return axios.put(`${baseUrl}/todo`, todo);
};
const updateStatus = todo => {
  return axios.patch(`${baseUrl}/todo`, todo);
};

const deleted = _id => {
  return axios.delete(`${baseUrl}/todo`, { data: { _id } });
};

export const todoApi = {
  getAll,
  add,
  update,
  updateStatus,
  deleted
};
