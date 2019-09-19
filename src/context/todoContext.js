import { useReducer } from "react";
import createTodoContext from "constate";

import { initialState, listReducer } from "../reducer/listTodoReducer";

import * as types from "../actionTypes/index";

const useTodo = () => {
  const [listTodo, dispatch] = useReducer(listReducer, initialState);

  const addTodo = text => {
    dispatch({
      type: types.ADD_NEW,
      payload: text
    });
  };

  const updateTodo = todo => {
    dispatch({
      type: types.UPDATE,
      payload: todo
    });
  };

  const deleteTodo = id => {
    dispatch({
      type: types.UPDATE,
      payload: id
    });
  };

  return { listTodo, addTodo, updateTodo, deleteTodo };
};

export const useTodoContext = createTodoContext(useTodo);
