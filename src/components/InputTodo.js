import React, { useState } from "react";

import { Button, Form } from "react-bootstrap";

import { useTodoContext } from "../context/todoContext";
import Spiner from "../share/Spiner";

const InputTodo = props => {
  const [text, setText] = useState("");
  const [isLoadAdd, setIsLoadingAdd] = useState(false);
  const { todoState, addTodo } = useTodoContext();

  const onChangeText = e => {
    setText(e.target.value);
  };
  const resetState = () => {
    setIsLoadingAdd(false);
  };
  const handleSubmit = e => {
    setIsLoadingAdd(true);
    e.preventDefault();
    addTodo(text, resetState);
    setText("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      {isLoadAdd && todoState.pending && <Spiner />}
      <div className="form-group">
        <Form.Control
          type="text"
          placeholder="new todos"
          onChange={onChangeText}
          value={text}
        />
        <hr />
        <Button type="submit" variant="primary">
          Add +
        </Button>
      </div>
    </Form>
  );
};

export default InputTodo;
