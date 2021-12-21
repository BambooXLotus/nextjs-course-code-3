import { GetStaticPaths, GetStaticProps } from 'next';
import { Fragment } from 'react';

import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';
import { getAllEvents, getEventById } from '../../helpers/api-utility';
import Event from '../../types/Event';

const EventPage = ({ event }: { event: Event }) => {
	if (!event) {
		return (
			<Fragment>
				<ErrorAlert>
					<p className='center'>NO EVENT FOUND!</p>
				</ErrorAlert>
				<div className='center'>
					<Button link='/events'>Show All Events</Button>
				</div>
			</Fragment>
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
		</Fragment>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const events = await getAllEvents();

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
