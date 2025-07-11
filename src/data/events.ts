import type { EventType } from "@/components/schedule/EventCard.astro";

export const events: EventType[] = [
  {
    date: new Date("2025-01-18T20:00:00"),
    timezone: "America/New_York",
    venue: {
      name: "The Grand Theater at Foxwoods Resort Casino",
      address: {
        street: "350 Trolley Line Blvd",
        city: "Mashantucket",
        state: "CT",
      },
    },
  },
  {
    date: new Date("2025-02-14T19:30:00"),
    timezone: "America/Chicago",
    venue: {
      name: "Joe's Live Rosemont",
      address: {
        street: "5441 Park Pl, Parkway Bank Park Entertainment District",
        city: "Rosemont",
        state: "IL",
      },
    },
  },
  {
    date: new Date("2025-03-09T20:00:00"),
    timezone: "America/Los_Angeles",
    venue: {
      name: "Golden 1 Center",
      address: {
        street: "500 David J Stern Walk",
        city: "Sacramento",
        state: "CA",
      },
    },
  },
  {
    date: new Date("2025-04-22T18:30:00"),
    timezone: "America/Denver",
    venue: {
      name: "Red Rocks Amphitheatre",
      address: {
        street: "18300 W Alameda Pkwy",
        city: "Morrison",
        state: "CO",
      },
    },
  },
  {
    date: new Date("2025-05-17T19:00:00"),
    timezone: "America/New_York",
    venue: {
      name: "The Fillmore Philadelphia",
      address: {
        street: "29 E Allen St",
        city: "Philadelphia",
        state: "PA",
      },
    },
  },
  {
    date: new Date("2025-06-12T20:00:00"),
    timezone: "America/Chicago",
    venue: {
      name: "Stage AE Outdoor Summer Concert Series Presented by Coors Light",
      address: {
        street: "400 North Shore Dr",
        city: "Pittsburgh",
        state: "PA",
      },
    },
  },
  {
    date: new Date("2025-07-26T21:00:00"),
    timezone: "America/Phoenix",
    venue: {
      name: "The Van Buren",
      address: {
        street: "401 W Van Buren St",
        city: "Phoenix",
        state: "AZ",
      },
    },
  },
  {
    date: new Date("2025-08-15T19:00:00"),
    timezone: "America/New_York",
    venue: {
      name: "The Bluebird Cafe",
      address: {
        street: "4104 Hillsboro Pike",
        city: "Nashville",
        state: "TN",
      },
    },
  },
  {
    date: new Date("2025-09-05T20:00:00"),
    timezone: "America/Chicago",
    venue: {
      name: "Billy Bob's Texas",
      address: {
        street: "2520 Rodeo Plaza",
        city: "Fort Worth",
        state: "TX",
      },
    },
  },
  {
    date: new Date("2025-10-18T19:30:00"),
    timezone: "America/New_York",
    venue: {
      name: "The Charleston Music Hall",
      address: {
        street: "37 John St",
        city: "Charleston",
        state: "SC",
      },
    },
  },
  {
    date: new Date("2025-11-09T20:00:00"),
    timezone: "America/Chicago",
    venue: {
      name: "Ryman Auditorium",
      address: {
        street: "116 5th Ave N",
        city: "Nashville",
        state: "TN",
      },
    },
  },
  {
    date: new Date("2025-12-21T19:00:00"),
    timezone: "America/New_York",
    venue: {
      name: "Beacon Theatre - Holiday Country Nights Series",
      address: {
        street: "2124 Broadway",
        city: "New York",
        state: "NY",
      },
    },
  },
];
