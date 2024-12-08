"use client";

import Image from "next/image";

const SPONSORS = [
  "ecast",
  "ecast",
  "ecast",
  "ecast",
  "ecast",
];

export function SponsoredBy() {
  return (
    <section className="py-8 px-8 lg:py-20 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-gray-300 tracking-wide mb-8">
          SPONSORED BY
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {SPONSORS.map((logo, key) => (
            <Image
              width={256}
              height={256}
              key={key}
              src={`/images/sponsers/${logo}-logo.png`}
              alt={logo}
              className="w-40 transition-transform transform hover:scale-110"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SponsoredBy;
