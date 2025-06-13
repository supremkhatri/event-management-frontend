"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useUserStore } from '@/store/useUserStore';

export default function OngoingCard({
  title,
  description,
  image,
}: {
  id: string;
  title: string;
  description: string;
  image: string;
}) {

  const {isLoggedIn} = useUserStore();
  return (
    <div className="bg-blue-950 max-w-sm shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1 rounded-lg overflow-hidden">
      <Image src={image} alt={title} width={250} height={250} className="w-full  object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-white text-sm">{description}</p>
        <div className="mt-4 flex justify-between items-center">
        <Link href={`/events/ongoing/${title.replace(/\s+/g, '-')}`}>
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow hover:bg-blue-700 transition">
              View Details
            </button>
          </Link>
          {isLoggedIn ? (
            <>
            <Link href={`/register/${title.replace(/\s+/g, '-')}`}>
            <button className="px-4 py-2 border border-white text-white text-sm font-semibold rounded-lg hover:bg-blue-100 hover:text-blue-700 transition">
              Register Now
            </button>
          </Link>
            </>
          ): (
            <>   
            <Link href={`/login`}>
            <button className="px-4 py-2 border border-white text-white text-sm font-semibold rounded-lg hover:bg-blue-100 hover:text-blue-700 transition">
              LogIn To Register
            </button>
          </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
