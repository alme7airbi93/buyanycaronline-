var user = require("../controllers/User.Controller");

module.exports = (app) => {
    app.post("/user", user.register);
    app.post("/login", user.login);
};
