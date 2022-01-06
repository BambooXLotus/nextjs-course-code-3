import axios from 'axios';
import { useContext, useRef } from 'react';

import NotificationContext from '../../store/notification-context';
import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
	const emailRef = useRef<HTMLInputElement | null>(null);
	const notificationCtx = useContext(NotificationContext);

	function registrationHandler(event: React.SyntheticEvent) {
		event.preventDefault();

		notificationCtx.showNotification({
			title: 'Signing Up...',
			message: 'Registering for Newsletter',
			status: 'pending',
		});

		axios
			.post('/api/newsletter', {
				email: emailRef.current?.value,
			})
			.then(function (response) {
				console.log(response.data);

				notificationCtx.showNotification({
					title: 'Success!',
					message: 'Successfully registered for Newsletter!',
					status: 'success',
				});
			})
			.catch(function (error) {
				notificationCtx.showNotification({
					title: 'ERROR!',
					message: error.message,
					status: 'error',
				});
			});
	}

	return (
		<section className={classes.newsletter}>
			<h2>Sign up to stay updated!</h2>
			<form onSubmit={registrationHandler}>
				<div className={classes.control}>
					<input ref={emailRef} type='email' id='email' placeholder='Your email' aria-label='Your email' />
					<button>Register</button>
				</div>
			</form>
		</section>
	);
}

export default NewsletterRegistration;
