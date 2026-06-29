const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/todos.json");

let todos = require("../data/todos.json");

// Save todos to JSON file
const saveTodos = () => {
    fs.writeFileSync(
        filePath,
        JSON.stringify(todos, null, 2)
    );
};

// GET All Todos
const getTodos = (req, res) => {
    res.json(todos);
};

// GET Single Todo
const getTodoById = (req, res) => {
    const id = parseInt(req.params.id);

    const todo = todos.find((t) => t.id === id);

    if (!todo) {
        return res.status(404).json({
            message: "Todo not found"
        });
    }

    res.json(todo);
};

// POST Add Todo
const addTodo = (req, res) => {

    const newTodo = {
        id: todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1,
        title: req.body.title,
        description: req.body.description,
        completed: false
    };

    todos.push(newTodo);

    saveTodos();

    res.status(201).json(newTodo);
};

// PUT Update Todo
const updateTodo = (req, res) => {

    const id = parseInt(req.params.id);

    const todo = todos.find((t) => t.id === id);

    if (!todo) {
        return res.status(404).json({
            message: "Todo not found"
        });
    }

    todo.title = req.body.title || todo.title;
    todo.description = req.body.description || todo.description;

    if (req.body.completed !== undefined) {
        todo.completed = req.body.completed;
    }

    saveTodos();

    res.json(todo);
};

// DELETE Todo
const deleteTodo = (req, res) => {

    const id = parseInt(req.params.id);

    const index = todos.findIndex((t) => t.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Todo not found"
        });
    }

    todos.splice(index, 1);

    saveTodos();

    res.json({
        message: "Todo deleted successfully"
    });
};

module.exports = {
    getTodos,
    getTodoById,
    addTodo,
    updateTodo,
    deleteTodo
};