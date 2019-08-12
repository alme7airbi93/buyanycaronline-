const app = require('./config/express');
// default route
app.get('/', (req, res) => {
    res.json("WELCOME BUYANYCARONLINE");
});

// listen on port 3000
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
module.exports = app;
