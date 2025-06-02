import React from "react";

interface Event {
  title: string;
  tags: string[];
  image: string;
  status: string; 
}

interface EventSuggestionsProps {
  currentEvent: Event;
  allEvents: Event[];
}

const EventSuggestions: React.FC<EventSuggestionsProps> = ({
  currentEvent,
  allEvents,
}) => {
  // Function to shuffle events
  const shuffleArray = (array: Event[]): Event[] => {
  return array
    // Add a `sort` property to each event object temporarily for sorting
    .map((item) => ({ ...item, sort: Math.random() }))
    // Now we tell TypeScript the type of the sorted array items, including `sort`
    .sort((a, b) => a.sort - b.sort)
    // Remove the `sort` property, return as Event type
    .map(({ sort, ...rest }): Event => rest);
};


  // Exclude the current event and shuffle the rest
  const shuffledEvents = shuffleArray(
    allEvents.filter((event) => event.title !== currentEvent.title)
  );

  // Limit to 3 suggestions
  const suggestions = shuffledEvents.slice(0, 3);

  if (suggestions.length === 0) return null; // No suggestions to show

  return (
    <div className="mt-10 mx-4">
      <h2 className="text-3xl font-bold text-gray-100 mb-600 mb-6"> 
        Explore more events
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {suggestions.map((suggestion) => (
          <li
            key={suggestion.title}
            className="relative bg-gray-900 shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl p-4 cursor-pointer"
            onClick={() => window.location.href = `/events/${suggestion.status}/${suggestion.title.replace(/\s+/g, '-')}`} 
          >
            <div className="relative group">
              <img
                src={suggestion.image}
                alt={suggestion.title}
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-center bg-gradient-to-b from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <div className="bg-white bg-opacity-75 p-2 rounded-lg shadow-lg w-full max-w-xs">
                  <p className="text-sm text-gray-900 font-semibold mb-1">{suggestion.status}</p>
                  <ul className="flex flex-wrap gap-2 text-xs text-gray-700">
                    {suggestion.tags.map((tag) => (
                      <li
                        key={tag}
                        className="bg-blue-600 text-white py-1 px-2 rounded-full" 
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-400 truncate">
                {suggestion.title}
              </h3>

              {/* View Event button */}
              <a
                href={`/events/${suggestion.status}/${suggestion.title.replace(/\s+/g, '-')}`}
                className="bg-blue-600 text-white text-xs py-2 px-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-2 block text-center"
              >
                View Event
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventSuggestions;
