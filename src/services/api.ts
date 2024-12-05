import axios from 'axios';
const test = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const fetchTasks = async () => {
  try {
    console.log(test);
    const response = await api.get('/tasks');
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default api;