import React, { useState } from "react";

import { Button, Form } from "react-bootstrap";

import { useTodoContext } from "../context/todoContext";

const InputTodo = props => {
  const [text, setText] = useState("");

  const { addTodo } = useTodoContext();

  const onChangeText = e => {
    setText(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <Form onSubmit={handleSubmit}>
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
