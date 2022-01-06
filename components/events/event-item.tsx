import Image from 'next/image';

import Event from '../../types/Event';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import DateIcon from '../icons/date-icon';
import Button from '../ui/button';
import styles from './event-item.module.css';

interface IEventItem {
	event: Event;
}

const EventItem = ({ event }: IEventItem) => {
	const humanReadableDate = new Date(event.date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	const formattedAddress = event.title.replace(', ', '\n');

	return (
		<li className={styles.item}>
			<img src={event.image} alt={event.title} />
			{/* <Image src={event.image} alt={event.title} width={240} height={160} /> */}
			<div className={styles.content}>
				<div className={styles.summary}>
					<h2>{event.title}</h2>
					<div className={styles.date}>
						<DateIcon></DateIcon>
						<time>{humanReadableDate}</time>
					</div>
					<div className={styles.address}>
						<AddressIcon></AddressIcon>
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div className={styles.actions}>
					<Button link={`/events/${event.id}`}>
						<span>Explore Event</span>
						<span className={styles.icon}>
							<ArrowRightIcon></ArrowRightIcon>
						</span>
					</Button>
				</div>
			</div>
		</li>
	);
};

export default EventItem;
