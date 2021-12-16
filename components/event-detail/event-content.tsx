import { ReactChild } from 'react';

import classes from './event-content.module.css';

interface IEventContent {
	children: ReactChild;
}

const EventContent = ({ children }: IEventContent) => {
	return <section className={classes.content}>{children}</section>;
};

export default EventContent;
