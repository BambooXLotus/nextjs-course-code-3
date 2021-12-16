import { useRouter } from 'next/router';
import { Fragment } from 'react';

import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../dummy-data';

const EventsPage = () => {
	const router = useRouter();
	const events = getAllEvents();

	const onSearch = (year: string, month: string) => {
		const fullPath = `/events/${year}/${month}`;
		router.push(fullPath);
	};

	return (
		<Fragment>
			<EventsSearch onSearch={onSearch}></EventsSearch>
			<EventList events={events}></EventList>
		</Fragment>
	);
};

export default EventsPage;
