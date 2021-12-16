import AddressIcon from '../icons/address-icon';
import DateIcon from '../icons/date-icon';
import styles from './event-logistics.module.css';
import LogisticsItem from './logistics-item';

interface IEventLogicstics {
	date: string;
	address: string;
	image: string;
	imageAlt: string;
}

const EventLogistics = ({ date, address, image, imageAlt }: IEventLogicstics) => {
	const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	const addressText = address.replace(', ', '\n');

	return (
		<section className={styles.logistics}>
			<div className={styles.image}>
				<img src={image} alt={imageAlt} />
			</div>
			<ul className={styles.list}>
				<LogisticsItem icon={DateIcon}>
					<time>{humanReadableDate}</time>
				</LogisticsItem>
				<LogisticsItem icon={AddressIcon}>
					<address>{addressText}</address>
				</LogisticsItem>
			</ul>
		</section>
	);
};

export default EventLogistics;
