import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MessageSquare, Plus, X } from "lucide-react";

function Sidebar({ isOpen, onClose }) {
  const [sessions, setSessions] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch("http://localhost:5000/api/sessions")
      .then(res => res.json())
      .then(data => setSessions(data))
      .catch(() => console.error("Failed to fetch sessions"));
  }, [location.pathname]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-20"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed lg:relative w-64 h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 border-r border-gray-200 dark:border-slate-700 flex flex-col transition-all duration-300 ease-in-out z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-4 border-b border-gray-200 dark:border-slate-700 flex items-center justify-between">
          <Link
            to="/"
            className="flex-1 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all hover:shadow-lg group"
          >
            <Plus size={18} className="group-hover:rotate-90 transition-transform" />
            <span>New Chat</span>
          </Link>
          <button
            onClick={onClose}
            className="lg:hidden p-2 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            <X size={20} className="text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {sessions.length === 0 ? (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              <MessageSquare size={32} className="mx-auto mb-3 opacity-50" />
              <p className="text-sm">No chats yet</p>
            </div>
          ) : (
            sessions.map((session) => {
              const isActive = location.pathname === `/chat/${session.id}`;
              return (
                <Link
                  key={session.id}
                  to={`/chat/${session.id}`}
                  onClick={onClose}
                  className={`block p-3 rounded-lg transition-all duration-200 group ${
                    isActive
                      ? "bg-blue-600 dark:bg-blue-700 text-white shadow-md"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <MessageSquare
                      size={18}
                      className={`mt-0.5 flex-shrink-0 ${
                        isActive ? "text-white" : "text-gray-400 dark:text-gray-500"
                      }`}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        {session.title || "Untitled Chat"}
                      </p>
                      <p className="text-xs opacity-75 truncate">
                        {new Date(session.created_at || Date.now()).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>

        <div className="p-4 border-t border-gray-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            v1.0.0
          </p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
