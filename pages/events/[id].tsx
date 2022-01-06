import { GetStaticPaths, GetStaticProps } from 'next';
import { Fragment } from 'react';

import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';
import Comments from '../../components/input/comments';
import { getEventById, getFeaturedEvents } from '../../helpers/api-utility';
import Event from '../../types/Event';

const EventPage = ({ event }: { event: Event }) => {
	if (!event) {
		return (
			<div className='center'>
				<p>Loading...</p>
			</div>
		);
	}

	return (
		<Fragment>
			<EventSummary title={event.title}></EventSummary>
			<EventLogistics
				date={event.date}
				address={event.location}
				image={event.image}
				imageAlt={event.title}
			></EventLogistics>
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
			<Comments eventId={event.id} />
		</Fragment>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const events = await getFeaturedEvents();

	const paths = events.map((event) => {
		return {
			params: { id: event.id },
		};
	});
	return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
	const id = context.params?.id as string;
	const event = await getEventById(id);

	if (!event) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			event: event,
		},
		revalidate: 600,
		notFound: false,
	};
};

export default EventPage;
