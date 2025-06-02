import Image from 'next/image';
import Link from 'next/link';

export default function OngoingCard({
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
    <div className="bg-white shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1 rounded-lg overflow-hidden">
      <Image src={image} alt={title} width={250} height={250} className="w-full  object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-900">{title}</h3>
        <p className="text-gray-700 mt-2 text-sm">{description}</p>
        <div className="mt-4 flex justify-between items-center">
        <Link href={`/events/ongoing/${title.replace(/\s+/g, '-')}`}>
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow hover:bg-blue-700 transition">
              View Details
            </button>
          </Link>
          <Link href={`/register/${title.replace(/\s+/g, '-')}`}>
            <button className="px-4 py-2 border border-blue-600 text-blue-600 text-sm font-semibold rounded-lg hover:bg-blue-100 transition">
              Register Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
