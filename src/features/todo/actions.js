import apiService from "../../app/apiService";
import { ADD_TODO, TOGGLE_TODO, SET_FILTER, GET_TODOS } from "./reducer";

let nextTodoId = 0;
let todosArray = [];

// export const addTodo = (text) => {
//   return {
//     type: ADD_TODO;
//     payload: {
//       id: nextTodoId++,
//       text,
//     },
//   };
// };

export const addTodo = (text) => async (dispatch) => {
  try {
    const todo = { id: nextTodoId++, text, completed: false };
    const res = await apiService.post("/todos", todo);
    dispatch({ type: ADD_TODO, payload: { id: todo.id, text } });
  } catch (error) {
    console.log(error);
  }
};

export const getTodos = () => async (dispatch) => {
  try {
    const res = await apiService.get("/todos");
    nextTodoId = res.data.length + 1;
    todosArray = res.data;
    dispatch({ type: GET_TODOS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

// export const toggleTodo = (id) => {
//   return {
//     type: TOGGLE_TODO,
//     payload: { id },
//   };
// };

export const toggleTodo = (id) => async (dispatch) => {
  try {
    const arrayChange = todosArray[id - 1];
    console.log(arrayChange);
    const res = await apiService.put(`/todos/${id}`, {
      ...arrayChange,
      completed: !arrayChange.completed,
    });
    dispatch({ type: TOGGLE_TODO, payload: res.data });
    // console.log("dispatch", res);
  } catch (error) {
    console.log(error);
  }
};

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter,
  };
};
