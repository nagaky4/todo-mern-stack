var express = require("express");
var router = express.Router();

var todoModal = require("../modal/todo/todoModal");

/* GET home page. */

router.get("/todos", (req, res) => {
  todoModal
    .getTodos()
    .then(data => {
      return res.status(200).json(data);
    })
    .catch(err => res.status(500).json(err));
});

router
  .route("/todo")
  .post((req, res) => {
    var text = req.body.text;
    if (text && text.length > 0) {
      todoModal
        .insertTodo(text)
        .then(data => {
          return res.status(200).json(data);
        })
        .catch(err => res.status(500).json(err));
    } else {
      return res.status(400).json({ error: "bad request" });
    }
  })
  .put((req, res) => {
    var todo = req.body;
    console.log("todo", todo);
    if (todo) {
      todoModal
        .updateTodo(todo)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json(err));
    } else {
      return res.status(400).json({ error: "bad request" });
    }
  })
  .patch((req, res) => {
    var todo = req.body;
    if (todo) {
      todoModal
        .updateTodoStatus(todo)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json(err));
    } else {
      return res.status(400).json({ error: "bad request" });
    }
  })
  .delete((req, res) => {
    var _id = req.body._id;
    if (_id) {
      todoModal
        .deleteTodo(_id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json(err));
    } else {
      return res.status(400).json({ error: "bad request" });
    }
  });

module.exports = router;
