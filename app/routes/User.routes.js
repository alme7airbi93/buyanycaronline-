var user = require("../controllers/User.Controller");

module.exports = (app) => {
    app.post("/register", user.register);
    app.post("/login", user.login);
};
