const API_BASE = "http://localhost:5000";

export const createSession = () =>
  fetch(`${API_BASE}/api/session/new`, { method: "POST" }).then((r) => r.json());

export const askQuestion = (sessionId, question) =>
  fetch(`${API_BASE}/api/session/${sessionId}/question`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question }),
  }).then((r) => r.json());

export const fetchSessions = () =>
  fetch(`${API_BASE}/api/sessions`).then((r) => r.json());

export const fetchHistory = (sessionId) =>
  fetch(`${API_BASE}/api/session/${sessionId}/history`).then((r) => r.json());
