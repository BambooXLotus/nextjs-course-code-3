import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../dummy-data';

const HomePage = () => {
	var events = getFeaturedEvents();

	return (
		<div>
			<EventList events={events}></EventList>
		</div>
	);
};

export default HomePage;
