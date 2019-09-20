import React from "react";

import { Button } from "react-bootstrap";

const Controller = props => {
  return (
    <div className="controller">
      <Button variant="outline-primary mr-2" active>
        All
      </Button>
      <Button variant="outline-success mr-2">Completed</Button>
      <Button variant="outline-warning mr-2">Not yet</Button>
    </div>
  );
};
export default Controller;
