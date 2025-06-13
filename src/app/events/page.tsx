import { EVENTS } from "@/lib/event_data";
import OngoingCard from "@/app/events/ongoing/Cards";
import PastCard from "@/app/events/past/Cards";

export default function Events() {
  const ongoingEvents = EVENTS.filter((event) => event.status === "ongoing");
  const pastEvents = EVENTS.filter((event) => event.status === "past");

  return (
    <div className="bg-black-200 flex flex-col items-center text-center min-h-screen py-8">
      {/* Ongoing Events */}
      <div className="mt-10">
        <h2 className="text-4xl font-extrabold text-center text-blue-400 mb-8">
          Ongoing Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 lg:px-12">
          {ongoingEvents.map((event, index) => (
            <OngoingCard
              key={index}
              id={index.toString()}
              title={event.title}
              description={event.description}
              image={event.image}
            />
          ))}
        </div>
      </div>

      {/* Past Events */}
      <div className="mt-16">
        <h2 className="text-4xl font-extrabold text-center text-gray-400 mb-8">
          Past Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 lg:px-12">
          {pastEvents.map((event, index) => (
            <PastCard
              key={index}
              id={index.toString()}
              title={event.title}
              description={event.description}
              image={event.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
