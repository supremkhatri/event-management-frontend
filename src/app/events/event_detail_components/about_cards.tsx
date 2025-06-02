// AboutCard.tsx
interface AboutCardProp {
    AboutCardtitle: string;
    AboutCardsubTitle: string;
    AboutCarddescription: string;
  }
  
  export function AboutCard({ AboutCardtitle, AboutCarddescription, AboutCardsubTitle }: AboutCardProp) {
    return (
      <div className="h-[350px] p-5 flex flex-col justify-center items-center rounded-2xl bg-gray-900 shadow-lg">
        <h6 className="mb-4 text-center text-white text-lg font-semibold">{AboutCardsubTitle}</h6>
        <h4 className="text-center text-white text-2xl font-bold">{AboutCardtitle}</h4>
        <p className="mt-2 mb-10 text-base w-full lg:w-8/12 text-center text-white font-normal">
          {AboutCarddescription}
        </p>
        <button className="bg-white text-black py-2 px-4 rounded-full text-sm hover:bg-gray-300">
          View details
        </button>
      </div>
    );
  }
  
  export default AboutCard;  // Default export
  
  