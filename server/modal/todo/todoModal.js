var mongoose = require("mongoose");
var q = require("q");

/**
 * Todo schema
 */
var todoSchema = new mongoose.Schema(
  {
    text: String,
    status: { type: Boolean, default: false }
  },
  { timestamps: true }
);
const todoModal = mongoose.model("todos", todoSchema);

/**
 * getAll todo from database
 */

function getTodos() {
  var defer = q.defer();
  todoModal.find(
    {},
    [],
    {
      sort: {
        createdAt: -1
      }
    },

    (err, data) => {
      if (err) {
        console.log("get all todos err ", err);
        defer.reject(err);
      }
      defer.resolve(data);
    }
  );
  return defer.promise;
}

/**
 * insert one todo into database
 * @param {text} - String : text of todo
 */

function insertTodo(text) {
  if (text) {
    var defer = q.defer();
    todoModal.create({ text }, (err, data) => {
      if (err) {
        console.log("err insert todo err ", err);
        defer.reject(err);
      }
      defer.resolve(data);
    });
    return defer.promise;
  }
  return false;
}

/**
 * update todo rely on _id
 * @param {todo} - Object todo { _id , text , status}
 */
function updateTodo(todo) {
  if (todo) {
    var defer = q.defer();
    todoModal.updateOne({ _id: todo._id }, todo, (err, data) => {
      if (err) {
        console.log("err update todo err ", err);
        defer.reject(err);
      }
      defer.resolve(data);
    });
    return defer.promise;
  }
  return false;
}

/**
 * update status todo rely on _id
 * @param {todo} - Object todo { _id , status}
 */
function updateTodoStatus(todo) {
  if (todo) {
    var defer = q.defer();
    todoModal.updateOne(
      { _id: todo._id },
      { status: todo.status },
      (err, data) => {
        if (err) {
          console.log("update todo status err ", err);
          defer.reject(err);
        }
        defer.resolve(data);
      }
    );
    return defer.promise;
  }
  return false;
}
/**
 * delete todo rely on _id
 * @param {todo} - Object todo {_id}
 */
function deleteTodo(_id) {
  if (_id) {
    var defer = q.defer();
    todoModal.deleteOne({ _id: _id }, (err, data) => {
      if (err) {
        console.log("err delete todo err", err);
        defer.reject(err);
      }
      defer.resolve(data);
    });
    return defer.promise;
  }
  return false;
}
module.exports = {
  getTodos,
  insertTodo,
  updateTodo,
  updateTodoStatus,
  deleteTodo
};
