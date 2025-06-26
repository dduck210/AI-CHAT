import axios from "axios";
<<<<<<< HEAD

=======
>>>>>>> 43412db93fe9d94b28b35c76aa372662a9b4db87
const API_URL = "http://localhost:3001/todos";
export const getTodos = () => axios.get(API_URL);
export const addTodo = (todo) => axios.post(API_URL, todo);
export const deleteTodo = (id) => axios.delete(`${API_URL}/${id}`);
export const updateTodo = (id, todo) => axios.put(`${API_URL}/${id}`, todo);
