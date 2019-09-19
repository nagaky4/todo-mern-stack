import axios from "axios";

const baseUrl = "http://localhost:3001/api";

export const getTodosApi = text => {
  return axios.get(`${baseUrl}/todos`);
};

export const addTodoApi = text => {
  return axios.post(`${baseUrl}/todo`, { text });
};

export const updateTodoApi = todo => {
  return axios.put(`${baseUrl}/todo`, { todo });
};

export const deleteTodoApi = id => {
  return axios.delete(`${baseUrl}/todo`, { id });
};
