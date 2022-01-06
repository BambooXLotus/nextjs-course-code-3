import { createContext, useEffect, useState } from 'react';

interface INotification {
	title: string;
	message: string;
	status: string;
}

interface INotificationContext {
	notification: INotification | null;
	showNotification: (notificationData: INotification) => void;
	hideNotification: () => void;
}

const NotificationContext = createContext<INotificationContext>({
	notification: null,
	showNotification: (notificationData: INotification) => void {},
	hideNotification: () => void {},
});

interface INotificationContextProviderProps {
	children: React.ReactNode;
}

export const NotificationContextProvider = (props: INotificationContextProviderProps) => {
	const [activeNotification, setActiveNotification] = useState<INotification | null>();

	useEffect(() => {
		if (activeNotification && (activeNotification.status === 'success' || activeNotification.status === 'error')) {
			const timer = setTimeout(() => {
				setActiveNotification(null);
			}, 3000);

			return () => {
				clearTimeout(timer);
			};
		}
	}, [activeNotification]);

	const showNotificationHandler = (notificationData: INotification) => {
		setActiveNotification(notificationData);
	};

	const hideNotificationHandler = () => {
		setActiveNotification(null);
	};

	const context = {
		notification: activeNotification,
		showNotification: showNotificationHandler,
		hideNotification: hideNotificationHandler,
	};

	return <NotificationContext.Provider value={context}>{props.children}</NotificationContext.Provider>;
};

export default NotificationContext;
