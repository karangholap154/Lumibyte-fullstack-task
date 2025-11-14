function SkeletonResponse() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded-lg w-3/4"></div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded-lg w-full"></div>
        <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded-lg w-5/6"></div>
        <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded-lg w-4/5"></div>
      </div>
      <div className="space-y-3 pt-2">
        <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded-lg w-full"></div>
        <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded-lg w-3/4"></div>
      </div>
    </div>
  );
}

export default SkeletonResponse;
