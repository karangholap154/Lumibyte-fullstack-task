import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing.jsx";
import Chat from "./pages/Chat.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/chat/:sessionId" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
