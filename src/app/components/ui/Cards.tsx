import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Card({
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
    <div className="card hover:scale-105 hover:shadow-2xl cursor-pointer bg-base-100 transition duration-300 w-96 shadow-xl">
      <figure>
        <img src={image} alt={title} />
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
