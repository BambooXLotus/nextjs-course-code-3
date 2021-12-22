import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';

import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';
import { getFilteredEvents } from '../../helpers/api-utility';
import Event from '../../types/Event';

const FilteredEventsPage = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [events, setEvents] = useState<Event[]>([]);
	const [filterDate, setFilterData] = useState({});

	const router = useRouter();
	const slugData = router.query.slug as string[];

	useEffect(() => {
		const fetchData = async () => {
			const [year, month] = slugData;

			const numYear = +year;
			const numMonth = +month;

			if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
				return {
					props: {
						hasError: true,
					},
				};
			}

			const filterDateObj = { year: numYear, month: numMonth };
			setFilterData(filterDateObj);
			const events = await getFilteredEvents(filterDateObj);
			setEvents(events);
		};
		fetchData();
	});

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

	return (
		<Fragment>
			<ResultsTitle date={filterDate}></ResultsTitle>
			<EventList events={events}></EventList>
		</Fragment>
	);
};

export default FilteredEventsPage;
