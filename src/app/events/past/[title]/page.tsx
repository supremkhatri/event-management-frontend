"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import AboutEvent from "@/app/events/event_detail_components/about_event_container";
import Stats from "@/app/events/event_detail_components/event_stats";
import EventDetails from "@/app/events/event_detail_components/Event_Card";
import Presenters from "@/app/events/event_detail_components/presenters";
import SponsoredBy from "@/app/events/event_detail_components/sponsered-by";
import Faq from "@/app/components/faq";
import Gallery from "@/app/events/event_detail_components/gallery";

import { EVENTS } from "@/lib/event_data";

// Define the types for event data
interface Event {
  title: string;
  status: "ongoing" | "past";
  registrationLink?: string;
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
  cards: Array<{
    AboutCardtitle: string;
    AboutCardsubTitle: string;
    AboutCarddescription: string;
  }>;
  EventStats: {
    Participants: string;
    Speakers: string;
    Workshops: string;
    Days: string;
  };
  Presenters: Array<{
    title: string;
    des: string;
    name: string;
    position: string;
    panel: string;
    img: string;
  }>;
  images: string[];
}

const EventDetailPage = () => {
  const { title } = useParams();
  const [eventData, setEventData] = useState<Event | null>(null); // Type the state correctly

  useEffect(() => {
    if (title) {
      const decodedTitle = decodeURIComponent(title as string).replace(
        /-/g,
        " "
      );
      const event = EVENTS.find((e) => e.title === decodedTitle);

      if (event) {
        setEventData(event as Event);
      } else {
        console.error("Event not found:", decodedTitle);
      }
    }
  }, [title]);

  if (!eventData) return <div>Loading...</div>;

  return (
    <div>
      <EventDetails {...eventData} />
      <AboutEvent description={eventData.description} cards={eventData.cards} />
      <Stats EventStats={eventData.EventStats} />
      <Presenters presenters={eventData.Presenters || []} />
      <Gallery />
      <SponsoredBy sponsers={eventData.images || []} />
      <Faq />
    </div>
  );
};

export default EventDetailPage;
