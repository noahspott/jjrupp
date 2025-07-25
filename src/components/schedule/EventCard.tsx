// Lib
import { formatInTimeZone } from "date-fns-tz";

// Types
import type { EventType } from "@/data/events";

type EventCardProps = {
  event: EventType;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="border-primary text-primary bg-secondary relative border-s-[12px] px-8 py-6 shadow-2xl">
      <div className="absolute top-0 left-0 h-full w-full bg-white/30 object-cover"></div>
      <div className="relative z-10 flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-16">
        <time className="heading-4 flex min-w-[100px] flex-col gap-1 text-left sm:gap-2 sm:text-center">
          <span>{formatInTimeZone(event.date, event.timezone, "MMM d")}</span>
          <span>{formatInTimeZone(event.date, event.timezone, "yyyy")}</span>
        </time>
        <div className="flex flex-col gap-1 sm:gap-2">
          <address className="body-xl not-italic">
            {event.venue.address.city}, {event.venue.address.state}
          </address>
          <h3 className="body-base">{event.venue.name}</h3>
        </div>
      </div>
    </div>
  );
}
