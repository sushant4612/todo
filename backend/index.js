const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { Todo } = require("./db");

const app = express();

app.use(express.json());

app.post("/todo",async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(404).json({
            msg : "You sent the wrong inputs"
        })
        return;
    }
    await Todo.create({
        title: createPayload.title,
        description: createPayload.description,
        isCompleted: false
    })

    res.json({
        msg : "Todo created"
    })
})

app.get("/todos",async function(req, res) {
    const todo = await Todo.find({});
    res.json({
        todo
    })
})

app.put("/completed", async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status("411").json({
            msg : "You sent wrong inputs"
        })
    }
    await Todo.updateOne(
        {
            _id: req.body.id
        },{
            isCompleted: true
        }
    )    

    res.json({
        msg : "Todo marked as completed"
    })
})

app.listen(4000);