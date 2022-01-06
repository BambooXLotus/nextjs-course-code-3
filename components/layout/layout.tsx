import { Fragment, useCallback, useContext } from 'react';

import NotificationContext from '../../store/notification-context';
import Notification from '../ui/notification';
import MainHeader from './main-header';

interface ILayout {
	children: React.ReactChild;
}

const Layout = ({ children }: ILayout) => {
	const notificationCtx = useContext(NotificationContext);

	const activeNotification = notificationCtx.notification;
	return (
		<Fragment>
			<MainHeader></MainHeader>
			<main>{children}</main>
			{activeNotification && (
				<Notification
					title={activeNotification.title}
					message={activeNotification.message}
					status={activeNotification.status}
				></Notification>
			)}
		</Fragment>
	);
};

export default Layout;
