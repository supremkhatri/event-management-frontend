import Link from 'next/link';
import Image from 'next/image';

export default function Card({
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
    <div className="card hover:scale-105 hover:shadow-2xl cursor-pointer bg-base-100 transition duration-200 w-96 shadow-xl">
      <figure>
        <Image src={image} alt={title} width={500} height={300} className="object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
        <Link href={`/events/${encodeURIComponent(title)}`}>
            <button className="btn btn-info">View More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
