import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../helpers/api-utility';
import Event from '../../types/Event';

const EventsPage = ({ events }: { events: Event[] }) => {
	const router = useRouter();

	const onSearch = (year: string, month: string) => {
		const fullPath = `/events/${year}/${month}`;
		router.push(fullPath);
	};

	return (
		events && (
			<Fragment>
				<EventsSearch onSearch={onSearch}></EventsSearch>
				<EventList events={events}></EventList>
			</Fragment>
		)
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const events = await getAllEvents();

	return {
		props: {
			events: events,
		},
		revalidate: 600,
		notFound: false,
	};
};

export default EventsPage;
