const express = require("express");
const router = express.Router();

const {
    getTodos,
    getTodoById,
    addTodo,
    updateTodo,
    deleteTodo
} = require("../controllers/todoController");

// GET All Todos
router.get("/", getTodos);

// GET Single Todo
router.get("/:id", getTodoById);

// POST Add Todo
router.post("/", addTodo);

// PUT Update Todo
router.put("/:id", updateTodo);

// DELETE Todo
router.delete("/:id", deleteTodo);

module.exports = router;