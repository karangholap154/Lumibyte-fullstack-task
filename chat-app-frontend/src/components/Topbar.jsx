import { useContext } from "react";
import { Menu, Moon, Sun, MessageSquare } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

function Topbar({ toggleSidebar }) {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <div className="h-16 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 flex items-center justify-between px-4 sm:px-6 shadow-sm">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
        >
          <Menu size={24} className="text-gray-700 dark:text-gray-300" />
        </button>

        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg">
            <MessageSquare size={20} className="text-white" />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-gray-900 dark:text-white">
              Chat Assistant
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Powered by AI
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={() => setDark(!dark)}
        className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-all duration-300 hover:shadow-md"
        title={dark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {dark ? (
          <Sun size={20} className="text-yellow-500 animate-pulse" />
        ) : (
          <Moon size={20} className="text-slate-600" />
        )}
      </button>
    </div>
  );
}

export default Topbar;
