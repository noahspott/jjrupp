// Lib
import { fromZonedTime, toZonedTime } from "date-fns-tz";
import { differenceInCalendarDays } from "date-fns";

// Types
type State = string;

type Address = {
  street: string;
  city: string;
  state: State;
};

type Venue = {
  name: string;
  address: Address;
};

export type EventType = {
  date: Date;
  timezone: string;
  venue: Venue;
};

export const events: EventType[] = [
  createEvent({
    year: 2025,
    month: 8,
    day: 15,
    venue: {
      name: "Ugly Mug",
      address: {
        street: "426 Washington Street",
        city: "Cape May",
        state: "NJ",
      },
    },
  }),
  createEvent({
    year: 2025,
    month: 8,
    day: 30,
    venue: {
      name: "Paddy's Green",
      address: {
        street: "3907 Landis Avenue",
        city: "Sea Isle City",
        state: "NJ",
      },
    },
  }),
  createEvent({
    year: 2025,
    month: 9,
    day: 5,
    venue: {
      name: "Ugly Mug",
      address: {
        street: "426 Washington Street",
        city: "Cape May",
        state: "NJ",
      },
    },
  }),
  createEvent({
    year: 2025,
    month: 10,
    day: 11,
    venue: {
      name: "Legends Live",
      address: {
        street: "2545 North 5th Street Highway",
        city: "Reading",
        state: "PA",
      },
    },
  }),
  createEvent({
    year: 2025,
    month: 12,
    day: 6,
    venue: {
      name: "Legends Live",
      address: {
        street: "2545 North 5th Street Highway",
        city: "Reading",
        state: "PA",
      },
    },
  }),
];

function createEvent({
  year,
  month,
  day,
  hour = 0,
  minute = 0,
  timezone = "America/New_York",
  venue,
}: {
  year: number;
  month: number;
  day: number;
  hour?: number;
  minute?: number;
  timezone?: string;
  venue: {
    name: string;
    address: {
      street: string;
      city: string;
      state: string;
    };
  };
}) {
  return {
    date: createEventDate({ year, month, day, hour, minute, timezone }),
    timezone,
    venue,
  };
}

function createEventDate({
  year,
  month,
  day,
  hour = 0,
  minute = 0,
  timezone = "America/New_York",
}: {
  year: number;
  month: number;
  day: number;
  hour?: number;
  minute?: number;
  timezone?: string;
}): Date {
  return fromZonedTime(new Date(year, month - 1, day, hour, minute), timezone);
}

export function getUpcomingEvents(limit?: number) {
  const now = new Date();

  const upcoming = events
    .filter((event: EventType) => {
      const zonedNow = toZonedTime(now, event.timezone);
      const zonedEventDate = toZonedTime(event.date, event.timezone);
      return differenceInCalendarDays(zonedEventDate, zonedNow) >= 0;
    })
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  if (limit && limit > 0) {
    return upcoming.slice(0, limit);
  }
  return upcoming;
}
