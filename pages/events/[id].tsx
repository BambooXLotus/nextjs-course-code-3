import { useRouter } from 'next/router';
import { Fragment } from 'react';

import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';
import { getEventById } from '../../dummy-data';

const EventPage = () => {
	const router = useRouter();
	const id = router.query.id as string;

	const event = getEventById(id);

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

export default EventPage;
