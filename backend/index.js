const express = require("express");

const app = express();

app.use(express.json());

app.post("/todo", function(req, res) {

})

app.get("/todos", function(req, res) {

})

app.put("/completed", function(req, res) {

})

const PORT = 3000
app.listen(PORT, `Server is listening at POSR ${PORT}`);