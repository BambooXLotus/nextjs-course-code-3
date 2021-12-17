import { GetStaticProps } from 'next';

import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../dummy-data';
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
	console.log('Generating Static Page');
	var events = getFeaturedEvents();
	return {
		props: {
			events: events,
		},
		revalidate: 600,
		notFound: false,
	};
};

export default HomePage;
