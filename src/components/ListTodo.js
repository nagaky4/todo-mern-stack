import React from "react";
import { Table, Button } from "react-bootstrap";

import { useTodoContext } from "../context/todoContext";

const ListTodo = props => {
  const { listTodo } = useTodoContext();

  return (
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
        <tr>
          <td>1</td>
          <td>
            <input type="checkbox" className="regular-checkbox big-checkbox" />
          </td>
          <td>learn</td>
          <td>@mdo</td>
          <td>
            <Button variant="outline-primary mr-2">Edit</Button>
            <Button variant="outline-danger mr-2">Delete</Button>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>
            <input type="checkbox" className="regular-checkbox big-checkbox" />
          </td>
          <td>learn</td>
          <td>@mdo</td>
          <td>
            <Button variant="outline-primary mr-2">Edit</Button>
            <Button variant="outline-danger mr-2">Delete</Button>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>
            <input type="checkbox" className="regular-checkbox big-checkbox" />
          </td>
          <td>learn</td>
          <td>@mdo</td>
          <td>
            <Button variant="outline-primary mr-2">Edit</Button>
            <Button variant="outline-danger mr-2">Delete</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ListTodo;
