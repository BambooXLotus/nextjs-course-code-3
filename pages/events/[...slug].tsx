import { useRouter } from 'next/router';
import { Fragment } from 'react';

import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';
import { getFilteredEvents } from '../../dummy-data';

const FilteredEventsPage = () => {
	const router = useRouter();

	const filterData = router.query.slug as string[];

	if (!filterData) {
		return <p className='center'>Loading...</p>;
	}

	const [year, month] = filterData;

	const numYear = +year;
	const numMonth = +month;

	if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
		return (
			<Fragment>
				<ErrorAlert>
					<p className='center'>INVALID FILTER DATA!</p>;
				</ErrorAlert>
				<div className='center'>
					<Button link='/events'>Show All Events</Button>
				</div>
			</Fragment>
		);
	}

	const filterDate = { year: numYear, month: numMonth };
	const events = getFilteredEvents(filterDate);

	if (!events || events.length === 0) {
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

	const date = new Date(numYear, numMonth - 1);
	return (
		<Fragment>
			<ResultsTitle date={date}></ResultsTitle>
			<EventList events={events}></EventList>
		</Fragment>
	);
};

export default FilteredEventsPage;
