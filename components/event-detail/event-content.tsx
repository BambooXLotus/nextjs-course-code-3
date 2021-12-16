import classes from './event-content.module.css';

interface IEventContent {
	children: React.ReactChildren;
}

function EventContent({ children }: IEventContent) {
	return <section className={classes.content}>{children}</section>;
}

export default EventContent;
