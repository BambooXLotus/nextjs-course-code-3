import { useContext } from 'react';

import NotificationContext from '../../store/notification-context';
import styles from './notification.module.css';

export interface INotificationProps {
	title: string;
	message: string;
	status: string;
}

function Notification(props: INotificationProps) {
	const notificationCtx = useContext(NotificationContext);

	const { title, message, status } = props;

	let statusClasses = '';

	if (status === 'success') {
		statusClasses = styles.success;
	}

	if (status === 'error') {
		statusClasses = styles.error;
	}

	if (status === 'pending') {
		statusClasses = styles.pending;
	}

	const activeClasses = `${styles.notification} ${statusClasses}`;

	return (
		<div className={activeClasses} onClick={notificationCtx.hideNotification}>
			<h2>{title}</h2>
			<p>{message}</p>
		</div>
	);
}

export default Notification;
