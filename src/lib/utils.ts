import { type ClassValue, clsx } from "clsx"; 
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// to get the event date (default is December 30, 2024)
export function getEventDate(month = 11, day = 30, year = 2024) {
  const date = new Date(year, month, day);
  return date;
}

// Countdown to the event (default is December 30, 2024, at 4 PM)
export function countdownToEvent(targetDate = getEventDate()) {
  const now = new Date();

  // event is set for 4 PM
  targetDate.setHours(16, 0, 0, 0); 

  // Calculate the time difference in ms
  const difference = targetDate.getTime() - now.getTime();

  if (difference <= 0) {
    // If the event has already passed, check if it's within the ongoing event window
    const isOngoing = now.getTime() >= targetDate.getTime() && now.getHours() < 18;

    if (isOngoing) return null;  // If not, return stop countdown

    // Move to the next event if it's passed
    return countdownToEvent(getEventDate(now.getMonth())); 
  }

  // Calculate days, hours, minutes, and seconds 
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Return countdown 
  return {
    days: days,
    hours: hours.toString().padStart(2, "0"),
    minutes: minutes.toString().padStart(2, "0"),
    seconds: seconds.toString().padStart(2, "0"),
  };
}

// Fetch if the event is ongoing
export const isOngoingFetcher = () => {
  const timerObject = countdownToEvent();
  const isOngoing = timerObject === null;
  return isOngoing;
};

// Function to get event info (e.g., year, month, day)
export const getEventInfo = (date = new Date()) => {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1, // Month is 0-indexed, so add 1
    day: date.getDate(),
  };
};
