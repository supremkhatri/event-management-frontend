import AboutCard from "./about_cards";

interface AboutEventProps {
  description: string;
  cards: Array<{
    AboutCardtitle: string;
    AboutCardsubTitle: string;
    AboutCarddescription: string;
  }>;
}

export function AboutEvent({ description, cards }: AboutEventProps) {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10 sm:px-6 md:px-8 lg:px-12">
      <h2 className="text-center mb-4 text-lg sm:text-xl lg:text-2xl text-orange-500 font-semibold">About the Event</h2>

      <h3 className="text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-blue-900 font-extrabold mb-4">
        Why Attend?
      </h3>
      <p className="mt-2 sm:mt-4 lg:mt-6 lg:max-w-4xl mb-8 w-full text-center font-normal text-gray-500">
        {description}
      </p>
      <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
      {cards.map((card, idx) => (
  <div key={idx} className="transform transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 rounded-xl">
    <AboutCard {...card} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutEvent;

