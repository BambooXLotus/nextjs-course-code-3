import EventList from '../../components/events/event-list';
import { getAllEvents } from '../../dummy-data';

const EventsPage = () => {
	var events = getAllEvents();

	return (
		<div>
			<h1>All Events Page</h1>
			<EventList events={events}></EventList>
		</div>
	);
};

export default EventsPage;
