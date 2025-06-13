"use client";
'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Presenters from "@/app/events/event_detail_components/presenters";
import { EVENTS } from "@/lib/event_data";
import Registrationform from "@/app/register/form";
import AboutEvent from "@/app/events/event_detail_components/about_event_container";

interface Presenter {
  title: string;
  des: string;
  name: string;
  position: string;
  panel: string;
  img: string;
}

interface EventCard {
  AboutCardtitle: string;
  AboutCardsubTitle: string;
  AboutCarddescription: string;
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
  cards: EventCard[];
  coordinates: { lat: number; lng: number };
  description: string;
  startDate: string;
  endDate: string;
  termsAndConditions: string[];
  Presenters: Presenter[];
  images: string[];
}

const RegisterPage = () => {
  const { title } = useParams();
  const [eventData, seteventData] = useState<Event | null>(null);
  let eventTitle;

  useEffect(() => {
    if (title) {
      eventTitle = Array.isArray(title) ? title[0] : title;
      const decodedTitle = decodeURIComponent(eventTitle).replace(/-/g, " ");

      const event = EVENTS.find(
        (e) => e.title === decodedTitle && e.status === "ongoing"
      );

      if (event) {
        seteventData(event as Event);
      } else {
        console.error("Ongoing event not found:", decodedTitle);
      }
    }
  }, [title]);

  if (!eventData) return <div>Loading...</div>;

  return (
    <>
      <Registrationform
        title={eventData.title}
        terms={eventData.termsAndConditions}
      />
      <AboutEvent description={eventData.description} cards={eventData.cards} />
      <Presenters presenters={eventData.Presenters || []} />
    </>
  );
};

export default RegisterPage;
