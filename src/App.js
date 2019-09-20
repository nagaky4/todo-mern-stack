import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./App.css";
import Controller from "./components/Controller";
import ListTodo from "./components/ListTodo";
import Input from "./components/InputTodo";

import { useTodoContext } from "./context/todoContext";

function App() {
  return (
    <div className="App text-center">
      <div className="container text-center">
        <div className="row">
          <useTodoContext.Provider>
            <Jumbotron className="m-auto " style={{ width: "100%" }}>
              <h1 className="display-3">Todo is the best</h1>
              <hr className="my-2" />
              <Container>
                <ListTodo />
                <hr className="my-2" />
                <Controller />
                <hr className="my-2" />
                <Input />
              </Container>
            </Jumbotron>
          </useTodoContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
