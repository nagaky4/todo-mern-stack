import React, { useState, useEffect, useRef } from "react";
import { Table, Button, Form } from "react-bootstrap";

import { useTodoContext } from "../context/todoContext";
import Spiner from "../share/Spiner";

import "./ListTodo.css";

const ListTodo = props => {
  const [listChoose, setListChoose] = useState([]);
  const [choose, setChoose] = useState("");
  const [isChangeStatus, setIsChangeStatus] = useState("");
  const itemsRef = useRef([]);

  const {
    todoState,
    getAll,
    deleteTodo,
    updateTodo,
    updateStatusTodo
  } = useTodoContext();

  useEffect(() => {
    getAll();
  }, []);

  const resetListChoose = key => {
    setListChoose([...listChoose.filter(value => key !== value)]);
    setChoose(null);
    setIsChangeStatus(null);
  };

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, todoState.todos.length);
  }, [todoState.todos]);

  const ChangeStatus = (_id, status, key) => {
    const todo = {
      _id,
      status
    };
    setListChoose([...listChoose, key]);
    setIsChangeStatus(_id);
    updateStatusTodo(todo, () => resetListChoose(key));
  };

  const onEditTodo = (todo, key) => {
    setListChoose([...listChoose, key]);
  };

  const onSaveEdit = (value, key) => {
    setChoose(value._id);
    const todo = {
      _id: value._id,
      text: itemsRef.current[key].value
    };
    updateTodo(todo, () => resetListChoose(key));
  };

  const onDeleteTodo = (_id, key) => {
    setListChoose([...listChoose, key]);
    setIsChangeStatus(_id);
    setChoose(_id);
    deleteTodo(_id, () => resetListChoose(key));
  };

  const convertDateTime = d => {
    let date = new Date(d);
    let y = date.getFullYear();
    let mon = date.getMonth() + 1;
    let dd = date.getDate();

    let h = date.getHours();
    let m = date.getMinutes();
    let ss = date.getSeconds();
    return `${dd}-${mon}-${y} ${h} : ${m} : ${ss}`;
  };

  var summary = (
    <div className="wrapper-table">
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>IsDone</th>
            <th>Text</th>
            <th>CreateAt</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {todoState.todos.length > 0 &&
            todoState.todos.map((value, key) => {
              return (
                <tr key={key} className={value.status ? "have-done" : ""}>
                  <td>{key}</td>
                  <td>
                    {listChoose.includes(key) &&
                    (choose === value._id || isChangeStatus === value._id) &&
                    todoState.pending ? (
                      <Spiner />
                    ) : (
                      <input
                        type="checkbox"
                        className="regular-checkbox big-checkbox"
                        defaultChecked={value.status}
                        onChange={() =>
                          ChangeStatus(value._id, !value.status, key)
                        }
                      />
                    )}
                  </td>
                  {listChoose.includes(key) && isChangeStatus !== value._id ? (
                    <td>
                      <Form.Control
                        type="text"
                        defaultValue={value.text}
                        ref={el => (itemsRef.current[key] = el)}
                      />{" "}
                      <Button
                        variant="outline-primary mr-2"
                        onClick={() =>
                          setListChoose([
                            ...listChoose.filter(value => key !== value)
                          ])
                        }
                      >
                        Cancel
                      </Button>
                    </td>
                  ) : (
                    <td>{value.text}</td>
                  )}

                  <td>{convertDateTime(value.updatedAt)}</td>
                  <td>
                    {listChoose.includes(key) &&
                    isChangeStatus !== value._id ? (
                      <Button
                        variant="outline-success mr-2"
                        onClick={() => onSaveEdit(value, key)}
                      >
                        Save
                      </Button>
                    ) : (
                      <Button
                        variant="outline-primary mr-2"
                        onClick={() => onEditTodo(value, key)}
                      >
                        Edit
                      </Button>
                    )}
                    <Button
                      variant="outline-danger mr-2"
                      onClick={() => onDeleteTodo(value._id, key)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );

  // if (todoState.pending) {
  //   summary = <Spiner />;
  // }

  return summary;
};

export default ListTodo;
