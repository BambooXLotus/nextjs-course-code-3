import { useRouter } from 'next/router';
import { Fragment } from 'react';

import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import { getFilteredEvents } from '../../dummy-data';

const FilteredEventsPage = () => {
	const router = useRouter();

	const filterData = router.query.slug;

	if (!filterData) {
		return <p className='center'>No Filter Data</p>;
	}

	const year = filterData[0];
	const month = filterData[1];

	const numYear = +year;
	const numMonth = +month;

	if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
		return <p className='center'>Invalid Filter Data</p>;
	}

	const filterDate = { year: numYear, month: numMonth };
	const events = getFilteredEvents(filterDate);

	if (!events || events.length === 0) {
		return (
			<Fragment>
				<h1 className='center'>NO EVENT FOUND!</h1>;
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
