# ChatGPT Style App (Frontend + Backend)

This project is a simplified ChatGPT-style application built as a full-stack assignment using:

* React.js
* TailwindCSS
* JavaScript
* Node.js (Express)
* Mock JSON storage (no database)

---

## 📌 Features

### ✅ Frontend

* Landing page with “Start New Chat”
* Sidebar with:

  * All chat sessions
  * Auto-generated session titles
  * New Chat button
  * Collapsible design
* Responsive Chat Interface
* Dark/Light theme toggle
* Session-based chat routing (`/chat/:sessionId`)
* Table-based AI responses
* Feedback buttons (👍 / 👎)
* Loading animation / "Thinking…" message
* Clean modular React components

### ✅ Backend

* Node.js + Express API
* Mock JSON based data storage
* APIs:

  * `POST /api/session/new` → Create session
  * `POST /api/session/:id/question` → Ask question
  * `GET /api/sessions` → Get session list
  * `GET /api/session/:id/history` → Get chat history
* Auto-generate session title from first question
* No database required

---

## 📁 Project Structure

```
chat-app-frontend/
chat-app-backend/
```

---

## 🚀 Running the Project

### 1️⃣ Start Backend

```
cd chat-app-backend
npm install
npm run dev
```

Backend will run at:

```
http://localhost:5000
```

### 2️⃣ Start Frontend

```
cd chat-app-frontend
npm install
npm run dev
```

Frontend usually runs at:

```
http://localhost:5173
```

---

## 🧪 API Endpoints

| Method | Endpoint                  | Description                     |
| ------ | ------------------------- | ------------------------------- |
| POST   | /api/session/new          | Create a new chat session       |
| POST   | /api/session/:id/question | Ask a question inside a session |
| GET    | /api/sessions             | Fetch all sessions              |
| GET    | /api/session/:id/history  | Fetch chat history              |

---

## 📦 Deployment (GitHub)

1. Upload the entire folder structure
2. Ensure `node_modules` are **NOT** uploaded
3. Include the README.md
4. Ensure mock JSON files are included
5. Commit & push

---

## 📄 License

This project is for educational and assignment purposes.

---

## 👤 Author

Karan Gholap
