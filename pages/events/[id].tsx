import { getEventById } from '../../dummy-data';

import { useRouter } from 'next/router';

const EventPage = () => {
	const router = useRouter();
	const { id: pid } = router.query;

	const event = getEventById(pid);

	if (!event) {
		return <p>NO EVENT FOUND!</p>;
	}

	return (
		<div>
			<h1>{event?.id}</h1>
		</div>
	);
};

export default EventPage;
