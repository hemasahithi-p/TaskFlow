# 🚀 TaskFlow

A modern Full Stack Todo Application built using **React.js**, **Node.js**, **Express.js**, and **Axios**. TaskFlow enables users to efficiently manage daily tasks with complete CRUD functionality and persistent JSON-based storage.

---

# 📖 Overview

TaskFlow is a simple and user-friendly task management application that demonstrates full-stack web development concepts. It features a React frontend, an Express backend, and JSON-based persistent data storage.

---

# ✨ Features

- 📋 View all todos
- ➕ Add new todos
- ✏️ Edit existing todos
- 🗑️ Delete todos
- 📄 View detailed information of a todo
- ✅ Mark todos as Completed or Pending
- 🔄 Real-time UI updates
- 💾 Persistent JSON file storage
- 🌐 RESTful API using Express.js
- 📱 Multi-page application using React Router

---

# 🛠️ Tech Stack

## Frontend

- React.js
- React Router DOM
- Axios
- CSS3

## Backend

- Node.js
- Express.js
- CORS

## Database

- JSON File (`todos.json`)

## Development Tools

- Visual Studio Code
- Git
- GitHub
- Postman

---

# 📂 Project Structure

```text
TaskFlow
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── data
│   │   └── todos.json
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend
│   ├── public
│   ├── screenshots
│   │   ├── Home.png
│   │   ├── add-todo.png
│   │   ├── edit-todo.png
│   │   ├── details.png
│   │   └── completed.png
│   │
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   │
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

---

# ⚙️ Installation

## Clone the Repository

```bash
git clone https://github.com/hemasahithi-p/TaskFlow.git
```

```bash
cd TaskFlow
```

---

# 🚀 Backend Setup

Navigate to the backend folder.

```bash
cd backend
```

Install dependencies.

```bash
npm install
```

Start the backend server.

```bash
node server.js
```

Backend runs at:

```text
http://localhost:5000
```

---

# 💻 Frontend Setup

Open another terminal.

Navigate to the frontend folder.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Start the React application.

```bash
npm start
```

Frontend runs at:

```text
http://localhost:3000
```

---

# 📡 REST API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/todos` | Retrieve all todos |
| GET | `/todos/:id` | Retrieve a specific todo |
| POST | `/todos` | Create a new todo |
| PUT | `/todos/:id` | Update a todo |
| DELETE | `/todos/:id` | Delete a todo |

---

# 🚀 Future Enhancements

- 🔐 User Authentication
- 🗄️ MongoDB Integration
- 🔍 Search Todos
- 🎯 Filter by Status
- 📅 Due Dates
- 🏷️ Categories
- 🌙 Dark Mode
- 📱 Fully Responsive Design

---

# 👩‍💻 Author

**Hema Sahithi P**

GitHub: https://github.com/hemasahithi-p

---

# 📜 License

This project is created for educational and learning purposes.

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.
