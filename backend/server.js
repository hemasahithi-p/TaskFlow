const express = require("express");
const cors = require("cors");

const todoRoutes = require("./routes/todoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Todo Backend is Running!");
});

// Todo Routes
app.use("/todos", todoRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});