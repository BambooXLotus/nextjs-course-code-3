import styles from './event-summary.module.css';

interface IEventSummary {
	title: string;
}

const EventSummary = ({ title }: IEventSummary) => {
	return (
		<section className={styles.summary}>
			<h1>{title}</h1>
		</section>
	);
};

export default EventSummary;
