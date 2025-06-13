export default function OngoingClassCard({
  imageUrl,
  title,
  instructor,
  progress,
}: {
  id: string;
  imageUrl: string;
  title: string;
  instructor: string;
  progress: number;
}) {
  return (
    <div className="bg-white dark:bg-zinc-900 hover:shadow-xl transition-shadow transform hover:-translate-y-1  cursor-pointer rounded-2xl shadow-md p-4 w-full max-w-7xl space-y-3">
      <img
        src={imageUrl}
        alt={title}
        className="rounded-xl w-full h-72 object-cover"
      />
      <div>
        <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
          {title}
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          by {instructor}
        </p>
      </div>

      <div className="mt-2">
        <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-2 rounded-full overflow-hidden">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-right mt-1 text-zinc-500 dark:text-zinc-400">
          {progress}% completed
        </p>
      </div>
    </div>
  );
}
