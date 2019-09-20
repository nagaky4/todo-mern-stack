import * as types from "../actionTypes/index";

// import { todoApi } from "../api/todoApi";

export var initialState = {
  pending: false,
  todos: [],
  error: null
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TODOS_PENDING:
      return {
        ...state,
        pending: true
      };
    case types.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        pending: false,
        todos: action.payload
      };
    case types.FETCH_TODOS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
};
