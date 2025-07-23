import type { EventType } from "@/components/schedule/EventCard.astro";

type CreateEventDateInput = {
  year: number;
  month: number; // 1 = January, 12 = December
  day: number;
  hour?: number; // 24-hour format, default = 0
  minute?: number; // default = 0
};

const createEventDate = ({
  year,
  month,
  day,
  hour = 0,
  minute = 0,
}: CreateEventDateInput): Date => {
  return new Date(Date.UTC(year, month - 1, day, hour, minute));
};

export const events: EventType[] = [
  {
    date: createEventDate({
      year: 2025,
      month: 8,
      day: 15,
    }),
    timezone: "America/New_York",
    venue: {
      name: "Ugly Mug",
      address: {
        street: "426 Washington Street",
        city: "Cape May",
        state: "NJ",
      },
    },
  },
  {
    date: createEventDate({
      year: 2025,
      month: 8,
      day: 30,
    }),
    timezone: "America/New_York",
    venue: {
      name: "Paddy's Green",
      address: {
        street: "3907 Landis Avenue",
        city: "Sea Isle City",
        state: "NJ",
      },
    },
  },
  {
    date: createEventDate({
      year: 2025,
      month: 9,
      day: 5,
    }),
    timezone: "America/New_York",
    venue: {
      name: "Ugly Mug",
      address: {
        street: "426 Washington Street",
        city: "Cape May",
        state: "NJ",
      },
    },
  },
  {
    date: createEventDate({
      year: 2025,
      month: 10,
      day: 11,
    }),
    timezone: "America/New_York",
    venue: {
      name: "Legends Live",
      address: {
        street: "2545 North 5th Street Highway",
        city: "Reading",
        state: "PA",
      },
    },
  },
  {
    date: createEventDate({
      year: 2025,
      month: 12,
      day: 6,
    }),
    timezone: "America/New_York",
    venue: {
      name: "Legends Live",
      address: {
        street: "2545 North 5th Street Highway",
        city: "Reading",
        state: "PA",
      },
    },
  },
];
