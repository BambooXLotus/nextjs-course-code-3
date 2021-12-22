import { GetStaticProps } from 'next';

import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../helpers/api-utility';
import Event from '../types/Event';

const HomePage = ({ events }: { events: Event[] }) => {
	return (
		events && (
			<div>
				<EventList events={events}></EventList>
			</div>
		)
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const events = await getFeaturedEvents();

	return {
		props: {
			events: events,
		},
		revalidate: 1800,
		notFound: false,
	};
};

export default HomePage;
