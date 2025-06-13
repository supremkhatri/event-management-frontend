'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import AboutEvent from '@/app/events/event_detail_components/about_event_container';
import Stats from '@/app/events/event_detail_components/event_stats';
import EventDetails from '@/app/events/event_detail_components/Event_Card';
import Presenters from '@/app/events/event_detail_components/presenters';
import SponsoredBy from '@/app/events/event_detail_components/sponsered-by';
import Faq from '@/app/components/faq';

import { EVENTS } from "@/lib/event_data";

// Define the types for event data
interface EventCard {
  AboutCardtitle: string;
  AboutCardsubTitle: string;
  AboutCarddescription: string;
}

interface Presenter {
  title: string;
  des: string;
  name: string;
  position: string;
  panel: string;
  img: string;
}

interface EventStats {
  Participants: string;
  Speakers: string;
  Workshops: string;
  Days: string;
}

interface Event {
  title: string;
  status: "ongoing" | "past";
  registrationLink: string;
  date: string;
  time: string;
  host: string;
  location: string;
  cost: string;
  image: string;
  tags: string[];
  coordinates: { lat: number; lng: number };
  description: string;
  startDate: string;
  endDate: string;
  cards: EventCard[];
  EventStats: EventStats;
  Presenters: Presenter[];
  images: string[];
}

const EventDetailPage = () => {
  const { title } = useParams();
  const [eventData, setEventData] = useState<Event | null>(null); // Type the state correctly

  useEffect(() => {
    if (title) {
      const eventTitle = Array.isArray(title) ? title[0] : title;
      const decodedTitle = decodeURIComponent(eventTitle).replace(/-/g, ' ');

      const event = EVENTS.find((e) => e.title === decodedTitle && e.status === 'ongoing');

      if (event) {
        setEventData(event as Event);
      } else {
        console.error("Ongoing event not found:", decodedTitle);
      }
    }
  }, [title]);

  if (!eventData) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto p-6 gap-6">
        <div className="flex-1 lg:order-1">
          <EventDetails {...eventData} />
        </div>
      </div>

      <AboutEvent description={eventData.description} cards={eventData.cards} />
      <Stats EventStats={eventData.EventStats} />
      <Presenters presenters={eventData.Presenters || []} />
      <SponsoredBy sponsers={eventData.images || []}  />
      <Faq />
      
    </div>
  );
};

export default EventDetailPage;
