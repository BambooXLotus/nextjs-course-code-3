import Event from '../../types/Event';
import EventItem from './event-item';
import styles from './event-list.module.css';

interface IEventList {
	events: Event[];
}

const EventList = ({ events }: IEventList) => {
	return (
		<ul className={styles.list}>
			{events.map((event: Event) => {
				return <EventItem key={event.id} event={event}></EventItem>;
			})}
		</ul>
	);
};

export default EventList;
