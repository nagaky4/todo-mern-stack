var config = require("config");

module.exports = (user, password) => {
  return `mongodb+srv://${config.get("dbConfig.user")}:${config.get(
    "dbConfig.password"
  )}@cluster0-uwzyz.mongodb.net/test?retryWrites=true&w=majority`;
};
