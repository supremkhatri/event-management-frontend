"use client";
import useIsOngoing from "@/app/components/hooks/ongoing";
import { countdownToEvent } from "@/lib/utils";
import { useEffect, useState } from "react";

type TimerObject = {
  days: number;
  hours: string;
  minutes: string;
  seconds: string;
} | null;

export default function Countdown() {
  const [timerObject, setTimerObject] = useState<TimerObject>(null); // Initialize as null
  const isOngoing = useIsOngoing();

  useEffect(() => {
    const updateTimerObject = () => setTimerObject(countdownToEvent());

    updateTimerObject();
    const intervalId = setInterval(updateTimerObject, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (isOngoing) return null; // If the event is ongoing, don't show the countdown

  return (
    <div className="bg-primary w-full h-full min-[360px]:rounded-2xl grid grid-cols-2 grid-rows-2 px-10 text-dark">
      <div className="border-r border-dark flex flex-col gap-0 items-end justify-end px-4 py-2 lg:p-4">
        <p>DAYS</p>
        <h4 className="text-5xl lg:text-7xl">
          {timerObject?.days ?? "00"}
        </h4>{" "}
        {/* Use '??' to default to "00" if null */}
      </div>
      <div className="border-b border-dark flex flex-col gap-0 items-start justify-end px-4 py-2 lg:p-4">
        <p>HOURS</p>
        <h4 className="text-5xl lg:text-7xl">
          {timerObject?.hours ?? "00"}
        </h4>{" "}
        {/* Use '??' for default */}
      </div>
      <div className="border-t border-dark flex flex-col gap-0 items-end justify-start px-4 py-2 lg:p-4 relative -top-[1px]">
        <p>MINUTES</p>
        <h4 className="text-5xl lg:text-7xl">
          {timerObject?.minutes ?? "00"}
        </h4>{" "}
        {/* Use '??' for default */}
      </div>
      <div className="border-l border-dark flex flex-col gap-0 items-start justify-start px-4 py-2 lg:p-4 relative -left-[1px]">
        <p>SECONDS</p>
        <h4 className="text-5xl lg:text-7xl">
          {timerObject?.seconds ?? "00"}
        </h4>{" "}
        {/* Use '??' for default */}
      </div>
    </div>
  );
}
