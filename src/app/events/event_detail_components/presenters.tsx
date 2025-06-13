"use client";

import Image from "next/image";

interface PresenterProps {
  title: string;
  des: string;
  name: string;
  position: string;
  panel: string;
  img: string;
}

export function EventContentCard({
  title,
  des,
  name,
  position,
  panel,
  img,
}: PresenterProps) {
  return (
    <div className="flex flex-col items-center justify-between text-center mb-10 bg-gray-900 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out rounded-lg overflow-hidden text-white">
      {/* Image Section */}
      <div className="h-[20rem] lg:h-[32rem] lg:w-[25rem] shrink-0 relative">
        <Image
          width={500}
          height={500}
          src={img}
          alt="Event image"
          className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2 bg-black text-white text-xs px-3 py-1 rounded-md shadow-lg">
          {panel}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col justify-between">
        <h2 className="text-xl lg:text-2xl font-semibold text-blue-800 hover:text-indigo-600 transition-colors duration-300 mb-4">
          {title}
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">{des}</p>
        <div className="flex items-center gap-4">
          <div className="rounded-full w-14 h-14 bg-gray-200 shadow-md hover:shadow-lg flex items-center justify-center">
            <Image
              width={25}
              height={31}
              src="/images/sponsers/ecast-logo.png"
              alt="Logo"
              className="w-10 h-10 object-cover rounded-full"
            />
          </div>
          <div>
            <h6 className="text-lg font-medium text-gray-200">{name}</h6>
            <p className="text-sm text-gray-500">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface PresentersProps {
  presenters: PresenterProps[];
}

export function EventContent({ presenters }: PresentersProps) {
  return (
    <section className="py-16 px-6 lg:py-24 bg-black">
      <div className="container mx-auto">
        <h1 className="text-3xl lg:text-4xl text-orange-500 font-semibold text-center mb-12">
          Presenters
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {presenters.map((props, idx) => (
            <EventContentCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventContent;
