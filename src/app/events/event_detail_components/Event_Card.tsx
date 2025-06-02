import { useState, useEffect } from "react";
import { EVENTS } from "@/lib/event_data";
import { FaUserPlus, FaCalendarPlus, FaShareAlt } from "react-icons/fa"; // Replaced icon

interface EventProps {
  title: string;
  date: string;
  time: string;
  host: string;
  location: string;
  cost: string;
  image: string;
  tags: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  description?: string;
  startDate?: string;
  endDate?: string;
  registrationLink?: string;
}

const EventDetails: React.FC<EventProps> = ({
  title,
  registrationLink, // Accept registration link
  date,
  time,
  host,
  location,
  cost,
  tags,
  description,
  startDate,
  endDate,
}) => {
  const [isShared, setIsShared] = useState(false);
  const [isEventPast, setIsEventPast] = useState(false);

  // Find event from EVENTS prop and check if the event has passed
  useEffect(() => {
    const event = EVENTS.find((e) => e.title === title);
    if (event) {
      const eventStartDate = new Date(event.startDate);
      const currentDate = new Date();
      
      // Check if the event has passed based on the start date or if its status is 'past'
      setIsEventPast(eventStartDate < currentDate || event.status === "past");
    }
  }, [title, EVENTS]);

  const handleAddToCalendar = () => {
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title
    )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
      description || ""
    )}&location=${encodeURIComponent(location)}`;
    window.open(url, "_blank");
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsShared(true);
    setTimeout(() => setIsShared(false), 2000);
  };

  const formatDate = (date: string): string => {
    const options = { year: "numeric", month: "long", day: "numeric" } as const;
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <div className="flex flex-col max-w-4xl mx-auto bg-black text-white shadow-lg rounded-lg p-6 space-y-6 transition-transform hover:scale-105 hover:shadow-2xl">
      <h1 className="text-4xl font-bold text-center text-orange-500">{title}</h1>
      <div className="mt-2 text-sm flex flex-wrap justify-center gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-blue-100 text-black px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-400 font-semibold">Date:</span>
          <span className="text-gray-300">{formatDate(date)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400 font-semibold">Time:</span>
          <span className="text-gray-300">{time}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400 font-semibold">Host:</span>
          <span className="text-gray-300">{host}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400 font-semibold">Location:</span>
          <span className="text-gray-300">{location}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400 font-semibold">Cost:</span>
          <span className="text-gray-300">{cost}</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Register Now Button (Only show if the event is ongoing) */}
        {!isEventPast && registrationLink ? (
          <a
            href={registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center px-4 py-2 text-white rounded-lg shadow hover:scale-105 hover:shadow-xl transition bg-gradient-to-r from-blue-900 to-blue-700 animate-pulse"
          >
            <FaUserPlus className="mr-2" /> Register Now
          </a>
        ) : null}

        {/* Add to Calendar Button (Only show if the event is ongoing) */}
        {!isEventPast && startDate && endDate ? (
          <button
            onClick={handleAddToCalendar}
            className="flex items-center px-4 py-2 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-800 transition"
          >
            <FaCalendarPlus className="mr-2" /> Add to Calendar
          </button>
        ) : null}

        {/* Share Button */}
        <button
          onClick={handleShare}
          className="flex items-center px-4 py-2 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-800 transition"
        >
          <FaShareAlt className="mr-2" /> {isShared ? "Link Copied!" : "Share"}
        </button>
      </div>
    </div>
  );
};

export default EventDetails;
export type { EventProps };
