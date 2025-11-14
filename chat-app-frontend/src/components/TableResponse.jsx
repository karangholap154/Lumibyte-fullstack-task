import { useState } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";

function TableResponse({ data }) {
  const answer = data.answer;
  const [feedback, setFeedback] = useState(null);

  const handleLike = () => {
    setFeedback(feedback === "like" ? null : "like");
  };

  const handleDislike = () => {
    setFeedback(feedback === "dislike" ? null : "dislike");
  };

  return (
    <div className="space-y-4">
      <div className="bg-white dark:bg-slate-800 rounded-lg p-4 sm:p-6 border border-gray-200 dark:border-slate-700">
        {data.question && (
          <div className="mb-4 pb-4 border-b border-gray-200 dark:border-slate-700">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
              Question
            </p>
            <p className="text-gray-900 dark:text-gray-100">
              {data.question}
            </p>
          </div>
        )}

        <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-slate-700">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-gray-50 dark:bg-slate-700 border-b border-gray-200 dark:border-slate-600">
                {answer.columns.map((col) => (
                  <th
                    key={col}
                    className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 first:rounded-tl-lg last:rounded-tr-lg"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 dark:divide-slate-600">
              {answer.rows.map((row, i) => (
                <tr
                  key={i}
                  className="hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors"
                >
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className="px-4 py-3 text-gray-700 dark:text-gray-300"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {answer.description && (
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-sm text-blue-900 dark:text-blue-100">
              {answer.description}
            </p>
          </div>
        )}

        <div className="mt-4 flex gap-2">
          <button
            onClick={handleLike}
            className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
              feedback === "like"
                ? "bg-green-600 dark:bg-green-700 text-white shadow-md"
                : "bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600"
            }`}
          >
            <ThumbsUp size={16} />
            <span className="text-sm font-medium">Helpful</span>
          </button>

          <button
            onClick={handleDislike}
            className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
              feedback === "dislike"
                ? "bg-red-600 dark:bg-red-700 text-white shadow-md"
                : "bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600"
            }`}
          >
            <ThumbsDown size={16} />
            <span className="text-sm font-medium">Not helpful</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TableResponse;
