import * as types from "../actionTypes/index";

import { getTodosApi, addTodoApi } from "../api/todoApi";

export var initialState = [];

getTodosApi()
  .then(res => {
    console.log("data", res.data);
  })
  .catch(err => {
    console.log("err", err);
  });

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL:
      return state;
    case types.ADD_NEW:
      var text = action.payload;
      addTodoApi(text)
        .then(res => {
          console.log("res ", res);
        })
        .catch(err => {
          console.log("err ", err);
        });
      return [...state];

    case types.UPDATE:
      return state;
    case types.DELETE:
      return state;
    default:
      return state;
  }
};
