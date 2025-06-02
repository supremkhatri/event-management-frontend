import Image from 'next/image';
import Link from 'next/link';

export default function PastCard({
  id,
  title,
  description,
  image,
}: {
  id: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="bg-gray-100 shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 rounded-lg overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="w-full object-cover grayscale"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
        <div className="mt-4">
          <Link href={`/events/past/${title.replace(/\s+/g, '-')}`}>
            <button className="px-4 py-2 bg-gray-600 text-white text-sm font-semibold rounded-lg shadow hover:bg-gray-700 transition">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
