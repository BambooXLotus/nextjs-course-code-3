import axios from 'axios';
import { useContext, useEffect, useState } from 'react';

import NotificationContext from '../../store/notification-context';
import Comment from '../../types/Comment';
import CommentList from './comment-list';
import styles from './comments.module.css';
import NewComment from './new-comment';

export interface CommentsProps {
	eventId: string;
}
const Comments = (props: CommentsProps) => {
	const { eventId } = props;

	const notificationCtx = useContext(NotificationContext);

	const [showComments, setShowComments] = useState(false);
	const [comments, setComments] = useState<Comment[]>([]);

	useEffect(() => {
		if (showComments) {
			axios.get(`/api/comments/${eventId}`).then((response) => {
				setComments(response.data.comments);
			});
		}
	}, [showComments]);
	const toggleCommentsHandler = () => {
		setShowComments((prevStatus) => !prevStatus);
	};

	const addCommentHandler = (commentData: Comment) => {
		notificationCtx.showNotification({
			title: 'Sending Comment...',
			message: 'Your comment is sneding and stuff',
			status: 'pending',
		});

		axios
			.post(`/api/comments/${eventId}`, commentData)
			.then(function (response) {
				console.log(response.data);

				notificationCtx.showNotification({
					title: 'Success!',
					message: 'Successfully commented!',
					status: 'success',
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<section className={styles.comments}>
			<button onClick={toggleCommentsHandler}>{showComments ? 'Hide' : 'Show'} Comments</button>
			{showComments && <NewComment onAddComment={addCommentHandler} />}
			{showComments && <CommentList comments={comments} />}
		</section>
	);
};

export default Comments;
