// Lib
import { getUpcomingEvents } from "@/data/events";

// Components
import EventCard from "./EventCard";

// Types
import { type EventType } from "@/data/events";

export default function EventList({
  limit = undefined,
}: {
  limit?: number | undefined;
}) {
  return (
    <ul className="flex flex-col gap-4">
      {getUpcomingEvents(limit).map((event: EventType) => (
        <li key={event.date.toDateString()}>
          <EventCard event={event} />
        </li>
      ))}
    </ul>
  );
}
