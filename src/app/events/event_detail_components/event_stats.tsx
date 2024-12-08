'use client';

interface StatsCardProps {
  count: string;
  title: string;
}

interface EventStats {
  Participants: string;
  Speakers: string;
  Workshops: string;
  Days: string;
}

interface StatsProps {
  EventStats: EventStats;
}

export function StatsCard({ count, title }: StatsCardProps) {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 duration-300 ease-in-out transition-all hover:translate-y-1">
      <h1 className="text-4xl font-bold text-white">{count}</h1>
      <h6 className="text-lg font-medium text-gray-200 mt-2">{title}</h6>
    </div>
  );
}

export function OurStats({ EventStats }: StatsProps) {
  return (
    <section className="container mx-auto grid gap-10 px-8 py-20 lg:grid-cols-1 lg:gap-20 xl:grid-cols-2 xl:place-items-center">
      <div className="ml-9 w-full text-left">
        <h6 className="text-orange-500 text-lg font-medium">Event Stats</h6>
        <h2 className="text-5xl font-bold leading-tight text-blue-900">
          Conference <br /> Highlights
        </h2>
        
        <p className="mt-3 w-full text-gray-500 lg:w-9/12">
          {/* Event Description */}
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-9 gap-x-25 xl:grid-cols-2 bg:gray-900">
        {Object.entries(EventStats).map(([key, value], index) => (
          <StatsCard key={index} count={value} title={key} />
        ))}
      </div>
    </section>
  );
}

export default OurStats;
