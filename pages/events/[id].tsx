import { getEventById } from '../../dummy-data';

import { useRouter } from 'next/router';
import { Fragment } from 'react';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';

const EventPage = () => {
	const router = useRouter();
	const { id: pid } = router.query;

	const event = getEventById(pid);

	if (!event) {
		return (
			<Fragment>
				<p>NO EVENT FOUND!</p>
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

export default EventPage;
