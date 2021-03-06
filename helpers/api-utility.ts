import axios from 'axios';

import Event from '../types/Event';

export const getAllEvents = async (): Promise<Event[]> => {
  return await axios
    .get('https://deren-test.firebaseio.com/events.json')
    .then(({ data }) => {
      return data;
    })
    .then((data) => {
      const events: Event[] = [];
      for (const key in data) {
        const event = {
          id: key,
          ...data[key],
        };
        events.push(event);
      }
      return events;
    });
}

export const getFeaturedEvents = async (): Promise<Event[]> => {
  const events = await getAllEvents();
  return events.filter((event) => event.isFeatured);
};

export const getEventById = async (id: string): Promise<Event | undefined> => {
  const events = await getAllEvents();
  return events.find((event) => event.id === id);
};

export const getFilteredEvents = async (dateFilter): Promise<Event[]> => {
  const { year, month } = dateFilter;

  const events = await getAllEvents();

  let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}