import { useReducer } from "react";
import createTodoContext from "constate";

import { listReducer, initialState } from "../reducer/listTodoReducer";

import * as types from "../actionTypes/index";
import { todoApi } from "../api/todoApi";

const useTodo = () => {
  const [todoState, dispatch] = useReducer(listReducer, initialState);

  const getAll = cb => {
    dispatch({
      type: types.FETCH_TODOS_PENDING
    });
    todoApi
      .getAll()
      .then(res => {
        dispatch({
          type: types.FETCH_TODOS_SUCCESS,
          payload: res.data
        });
        cb();
      })
      .catch(error => {
        dispatch({
          type: types.FETCH_TODOS_ERROR,
          error
        });
      });
  };

  const addTodo = (text, cb) => {
    dispatch({
      type: types.FETCH_TODOS_PENDING
    });
    todoApi
      .add(text)
      .then(res => {
        getAll(cb);
      })
      .catch(error => {
        dispatch({
          type: types.FETCH_TODOS_ERROR,
          error
        });
      });
  };

  const updateTodo = (todo, cb) => {
    dispatch({
      type: types.FETCH_TODOS_PENDING
    });
    todoApi
      .update(todo)
      .then(res => {
        getAll(cb);
      })
      .catch(error => {
        dispatch({
          type: types.FETCH_TODOS_ERROR,
          error
        });
      });
  };

  const updateStatusTodo = (todo, cb) => {
    dispatch({
      type: types.FETCH_TODOS_PENDING
    });
    todoApi
      .updateStatus(todo)
      .then(res => {
        getAll(cb);
      })
      .catch(error => {
        dispatch({
          type: types.FETCH_TODOS_ERROR,
          error
        });
      });
  };

  const deleteTodo = (_id, cb) => {
    dispatch({
      type: types.FETCH_TODOS_PENDING
    });
    todoApi
      .deleted(_id)
      .then(res => {
        getAll(cb);
      })
      .catch(error => {
        dispatch({
          type: types.FETCH_TODOS_ERROR,
          error
        });
      });
  };

  return {
    todoState,
    getAll,
    addTodo,
    updateTodo,
    updateStatusTodo,
    deleteTodo
  };
};

export const useTodoContext = createTodoContext(useTodo);
