import { GetStaticProps } from 'next';
import Head from 'next/head';

import EventList from '../components/events/event-list';
import NewsletterRegistration from '../components/input/newsletter-registration';
import { getFeaturedEvents } from '../helpers/api-utility';
import Event from '../types/Event';

const HomePage = ({ events }: { events: Event[] }) => {
	return (
		events && (
			<div>
				<Head>
					<title>NextJS Events</title>
					<meta name='description' content='Find a lot of great events that allow you to evolve...' />
				</Head>
				<NewsletterRegistration></NewsletterRegistration>
				<EventList events={events}></EventList>
			</div>
		)
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const events = await getFeaturedEvents();

	return {
		props: {
			events: events,
		},
		revalidate: 1800,
		notFound: false,
	};
};

export default HomePage;
