# 🚀 TaskFlow

A modern Full Stack Todo Application built with **React.js**, **Node.js**, and **Express.js**. TaskFlow enables users to efficiently manage daily tasks with complete CRUD functionality, persistent JSON-based storage, and a clean multi-page interface.

---

## 📖 Overview

TaskFlow is a simple yet powerful task management application that demonstrates full-stack web development concepts. It provides a responsive React frontend connected to a RESTful Express backend with persistent data storage using a JSON file.

---

## ✨ Features

- 📋 View all todos
- ➕ Add new todos
- ✏️ Edit existing todos
- 🗑️ Delete todos
- 📄 View detailed information for each todo
- ✅ Mark todos as Completed or Pending
- 🔄 Automatic UI updates
- 💾 Persistent JSON file storage
- 🌐 RESTful API
- 📱 Multi-page application using React Router

---

## 🛠️ Tech Stack

### Frontend

- React.js
- React Router DOM
- Axios
- CSS3

### Backend

- Node.js
- Express.js
- CORS

### Data Storage

- JSON File (`todos.json`)

### Development Tools

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
│   │   └── todoController.js
│   │
│   ├── routes
│   │   └── todoRoutes.js
│   │
│   ├── data
│   │   └── todos.json
│   │
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend
│   ├── public
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
├── screenshots
│   ├── home.png
│   ├── add-todo.png
│   ├── edit-todo.png
│   ├── details.png
│   └── completed.png
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

```
http://localhost:5000
```

---

# 💻 Frontend Setup

Open a new terminal.

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

```
http://localhost:3000
```

---

# 📡 REST API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/todos` | Retrieve all todos |
| GET | `/todos/:id` | Retrieve a specific todo |
| POST | `/todos` | Create a new todo |
| PUT | `/todos/:id` | Update an existing todo |
| DELETE | `/todos/:id` | Delete a todo |

---

# 📸 Application Screenshots

## 🏠 Home Page

![Home Page](screenshots/home.png)

---

## ➕ Add Todo

![Add Todo](screenshots/add-todo.png)

---

## ✏️ Edit Todo

![Edit Todo](screenshots/edit-todo.png)

---

## 📄 Todo Details

![Todo Details](screenshots/details.png)

---

## ✅ Completed Todo

![Completed Todo](screenshots/completed.png)

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

- GitHub: https://github.com/hemasahithi-p

---

# 📜 License

This project is created for educational and learning purposes.

---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!
