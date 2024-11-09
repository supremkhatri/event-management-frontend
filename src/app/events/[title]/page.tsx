// src/app/events/[title]/page.tsx
'use client'; // This ensures that the component is treated as a Client Component

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; // Correct hook to get params from the route

// Example event data (replace with actual data fetching or API call)
const events = [
  { title: "My First Commit", description: "HTML, CSS, and Javascript classes to get you started with web development", image: "/images/image_2.jpg" },
  { title: "My Second Commit", description: "HTML, CSS classes to get you started with web development", image: "/images/image_2.jpg" },
  { title: "My Third Commit", description: "HTML, CSS classes to get you started with web development", image: "/images/image_2.jpg" },
  // Add more events as needed...
];

const EventDetailPage = () => {
  const { title } = useParams(); // Use `useParams` to get the dynamic segment from the URL
  const [eventData, setEventData] = useState<any>(null);

  // Fetch the event data based on the title after the component mounts
  useEffect(() => {
    if (title) {
      const event = events.find((e) => e.title === title);
      if (event) {
        setEventData(event);
      } else {
        console.error("Event not found:", title);
      }
    }
  }, [title]);

  if (!eventData) return <p>Loading...</p>;

  return (
    <div>
      <h1>{eventData.title}</h1>
      <p>{eventData.description}</p>
      <img src={eventData.image} alt={eventData.title} />
    </div>
  );
};

export default EventDetailPage;
