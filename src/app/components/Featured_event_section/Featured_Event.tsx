import CountdownContainer from "./Counter_Container/countdown_container";
import EventAction from "./Counter_Container/share";
import { monthInFocus } from "@/lib/constants";

export default function FeaturedEvent() {
  return (
    <section className="h-fit lg:h-[85vh] lg:min-h-[575px] lg:max-h-[768px] bg-dark text-slate-200 animate-fade-in">
      <article className="container h-full grid lg:grid-cols-[1fr,400px] xl:grid-cols-[1fr,475px] gap-20 lg:gap-14 xl:gap-20 items-center pt-6 pb-20 sm:pt-10 sm:pb-24 lg:py-12">
        <div className="ml-20 flex flex-col gap-1 sm:gap-2 max-lg:items-center max-lg:text-center">
          <div>
            <h5 className="uppercase relative max-sm:top-1 text-lg">
              <span className="text-secondary font-bold">Happening </span>{" "}
              This {monthInFocus}
            </h5>
            <div className="text-3xl sm:text-6xl md:text-7xl xl:text-8xl uppercase font-medium relative lg:-left-2 xl:-left-3">
              <h2 className="sm:leading-[0.85]">
                <span className="text-secondary ms-0 ps-0">A</span>
                <span className="font-extralight"> Eight</span>
              </h2>
              <h1 className="sm:leading-[0.85]">
                <span className="font-extralight">Days </span>
                <span className="text-secondary">Workshop</span>
              </h1>
              <h1 className="sm:leading-[0.85]">
                <span className="text-secondary ms-0 ps-0">On</span>
                <span className="font-extralight"> Djhango</span>
              </h1>
            </div>
          </div>
          <p className="italic text-xl mb-4 md:mb-6">
            Decoding Django: Build, Scale, Deploy - This {monthInFocus}
          </p>
          <EventAction />
        </div>
        <CountdownContainer />
      </article>
    </section>
  );
}
