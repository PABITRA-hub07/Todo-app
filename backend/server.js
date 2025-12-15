const express = require("express");
const cors = require("cors");

const app = express();

//Middlewire
app.use(cors());
app.use(express.json());

//Data
let todos = [];

//Test route
app.get("/todos", (req, res) => {
  res.json(todos);
});
app.post("/todos", (req, res) => {
  const text = req.body.text;

  const newTodo = {
    id: Date.now(),
    text: text,
    complete: false,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  const id = Number(req.params.id);

  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todo.completed = true;
  res.json(todo);
});

app.delete("/todos/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = todos.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todos.splice(index, 1);
  res.json({ message: "Todo deleted" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
