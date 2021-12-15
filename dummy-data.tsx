import { Event } from './types/Event';

const DUMMY_EVENTS: Event[] = [
	{
		id: 'e1',
		title: 'Programming for everyone',
		description:
			'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
		location: 'Somestreet 25, 12345 San Somewhereo',
		date: '2021-05-12',
		image:
			'https://firebasestorage.googleapis.com/v0/b/deren-test.appspot.com/o/events%2Fclay-banks-hwLAI5lRhdM-unsplash.jpg?alt=media&token=035eef4a-781d-41ef-a53c-50c90f1f6822',
		isFeatured: false,
	},
	{
		id: 'e2',
		title: 'Networking for introverts',
		description:
			"We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
		location: 'New Wall Street 5, 98765 New Work',
		date: '2021-05-30',
		image:
			'https://firebasestorage.googleapis.com/v0/b/deren-test.appspot.com/o/events%2Fjase-bloor-oCZHIa1D4EU-unsplash.jpg?alt=media&token=dc6b1dcd-9f90-4ea8-8343-617c57e67695',
		isFeatured: true,
	},
	{
		id: 'e3',
		title: 'Networking for extroverts',
		description:
			'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
		location: 'My Street 12, 10115 Broke City',
		date: '2022-04-10',
		image:
			'https://firebasestorage.googleapis.com/v0/b/deren-test.appspot.com/o/events%2Fjezael-melgoza-alY6_OpdwRQ-unsplash.jpg?alt=media&token=23e9de8d-cae9-465b-bdba-a3e6c0c82508',
		isFeatured: true,
	},
];

// export function getFeaturedEvents() {
// 	return DUMMY_EVENTS.filter((event) => event.isFeatured);
// }

export const getFeaturedEvents = (): Event[] => {
	return DUMMY_EVENTS.filter((event) => event.isFeatured);
};

// export function getAllEvents() {
// 	return DUMMY_EVENTS;
// }

export const getAllEvents = (): Event[] => {
	return DUMMY_EVENTS;
};

// export function getFilteredEvents(dateFilter) {
// 	const { year, month } = dateFilter;

// 	let filteredEvents = DUMMY_EVENTS.filter((event) => {
// 		const eventDate = new Date(event.date);
// 		return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
// 	});

// 	return filteredEvents;
// }

export const getFilteredEvents = (dateFilter) => {
	const { year, month } = dateFilter;

	let filteredEvents = DUMMY_EVENTS.filter((event) => {
		const eventDate = new Date(event.date);
		return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
	});

	return filteredEvents;
};

// export function getEventById(id) {
// 	return DUMMY_EVENTS.find((event) => event.id === id);
// }

export const getEventById = (id: string) => {
	return DUMMY_EVENTS.find((event) => event.id === id);
};
