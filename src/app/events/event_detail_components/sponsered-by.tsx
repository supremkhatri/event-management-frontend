"use client";

import Image from "next/image";


interface SponseredByProps{
  sponsers: string[];
}

export function SponsoredBy({sponsers}:SponseredByProps) {
  return (
    <section className="py-8 px-8 lg:py-20 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-gray-300 tracking-wide mb-8">
          SPONSORED BY
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {sponsers.map((logo, key) => (
            <Image
              width={256}
              height={256}
              key={key}
              src={logo}
              alt={logo}
              className="w-40 transition-transform  rounded-full transform hover:scale-110"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SponsoredBy;
