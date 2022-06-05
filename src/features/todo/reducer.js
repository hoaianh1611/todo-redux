export const ADD_TODO = "TODO.ADD";
export const GET_TODOS = "TODO.GET_TODOS";
export const TOGGLE_TODO = "TODO.TOGGLE_TODO";
export const SET_FILTER = "TODO.SET_FILTER";

const initialState = {
  todos: [],
  filter: "SHOW_ALL",
};

const todoReducer = (state = initialState, action) => {
  console.log("dispatch", JSON.stringify(action, null, 2));
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: payload.id, text: payload.text, completed: false },
        ],
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== payload.id) return todo;
          console.log("toggle reducer", payload.id, todo.id === payload.id);
          return { ...todo, completed: !todo.completed };
        }),
      };

    case SET_FILTER:
      return { ...state, filter: payload };

    case GET_TODOS:
      return { ...state, todos: payload };

    default:
      return state;
  }
};

export default todoReducer;
