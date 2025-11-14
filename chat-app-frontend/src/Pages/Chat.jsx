import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import TableResponse from "../components/TableResponse";
import SkeletonResponse from "../components/SkeletonResponse";


function Chat() {
  const { sessionId } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [history, setHistory] = useState([]);
  const [question, setQuestion] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/api/session/${sessionId}/history`)
      .then((res) => res.json())
      .then((data) => setHistory(data));
  }, [sessionId]);

  const [loading, setLoading] = useState(false);

const ask = async () => {
  if (!question.trim()) return;

  setLoading(true);

  const res = await fetch(
    `http://localhost:5000/api/session/${sessionId}/question`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    }
  );

  const data = await res.json();

  setHistory((prev) => [...prev, data]);
  setQuestion("");
  setLoading(false);
};


  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">


      <Sidebar isOpen={sidebarOpen} />

      <div className="flex-1 flex flex-col">
        <Topbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {history.map((item, index) => (
            <TableResponse key={index} data={item} />
          ))}
        </div>
        {loading && (
  <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse">
    <p className="text-gray-700 dark:text-gray-300 italic">{loading && <SkeletonResponse />}
    </p>
  </div>
)}


        <div className="p-4 flex gap-2 border-t border-gray-300 dark:border-gray-700">
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="flex-1 p-2 rounded bg-gray-200 dark:bg-gray-700"
            placeholder="Ask something..."
          />

<button
  onClick={ask}
  disabled={loading}
  className={`px-4 py-2 rounded text-white 
    ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}
  `}
>
  {loading ? "..." : "Send"}
</button>

        </div>
      </div>
    </div>
  );
}

export default Chat;
