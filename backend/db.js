const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://sushantsp14:tijKDaaosx1QWgR8@cluster0.qmfrbty.mongodb.net/todos");

const todoSchema = new mongoose.Schema({
    todo: {
        type : String,
        required : true
    },
    description : String,
    isCompleted : Boolean
})

const Todo = mongoose.model("Todo", todoSchema);

module.exports = {
    Todo
}