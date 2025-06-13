export default function CompletedClassCard  ({
  imageUrl,
  title,
  instructor,
}: {
  id: string;
  imageUrl: string;
  title: string;
  instructor: string;
  progress: number;
}){
  return (
    <div className="bg-green-50 cursor-pointer dark:bg-gradient-to-r from-yellow-800 to-orange-900 rounded-2xl shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1 p-4 w-full max-w-md space-y-3">
      <img
        src={imageUrl}
        alt={title}
        className="rounded-xl w-full h-72 object-cover opacity-80"
      />
      <div>
        <h2 className="text-lg font-semibold text-green-800 dark:text-white">
          {title}
        </h2>
        <p className="text-sm text-green-700 dark:text-white">
          by {instructor}
        </p>
      </div>

      <div className="flex justify-end">
        <span className="bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-full">
          Completed
        </span>
      </div>
    </div>
  );
};
