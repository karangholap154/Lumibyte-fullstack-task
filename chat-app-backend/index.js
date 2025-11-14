const express = require("express");
const cors = require("cors");
const { readJSON, writeJSON } = require("./utils/file");
const app = express();

app.use(cors());
app.use(express.json());

// ------------------------------
// 1. Start new chat session
// ------------------------------
app.post("/api/session/new", (req, res) => {
  const sessions = readJSON("sessions.json");

  const newSession = {
    id: Date.now().toString(),
    title: "New Chat " + sessions.length
  };

  sessions.push(newSession);
  writeJSON("sessions.json", sessions);

  res.json(newSession);
});

// ------------------------------
// 2. Ask question in session
// ------------------------------
app.post("/api/session/:id/question", (req, res) => {
  const { id } = req.params;
  const { question } = req.body;

  const responses = readJSON("responses.json");
  const answer = responses["default"];

  const history = readJSON("history.json");
  if (!history[id]) history[id] = [];

  // Create entry
  const entry = {
    question,
    answer,
    timestamp: Date.now(),
    feedback: null
  };

  history[id].push(entry);
  writeJSON("history.json", history);

  // ---------------------------
  // AUTO-GENERATE TITLE
  // ---------------------------
  const sessions = readJSON("sessions.json");

  const session = sessions.find((s) => s.id === id);

  // If only first question → create new title
  if (history[id].length === 1) {
    // Smart title generator
    const title = question.length > 25
      ? question.slice(0, 25) + "..."
      : question;

    session.title = title;
    writeJSON("sessions.json", sessions);
  }

  res.json(entry);
});


// ------------------------------
// 3. Get all sessions
// ------------------------------
app.get("/api/sessions", (req, res) => {
  const sessions = readJSON("sessions.json");
  res.json(sessions);
});

// ------------------------------
// 4. Get session history
// ------------------------------
app.get("/api/session/:id/history", (req, res) => {
  const { id } = req.params;

  const history = readJSON("history.json");
  const data = history[id] || [];

  res.json(data);
});

// ------------------------------
const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
