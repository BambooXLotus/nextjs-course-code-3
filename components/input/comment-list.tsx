import Comment from '../../types/Comment';
import styles from './comment-list.module.css';

const CommentList = ({ comments }: { comments: Comment[] }) => {
	return (
		<ul className={styles.comments}>
			{comments &&
				comments.length > 0 &&
				comments.map((comment) => {
					return (
						<li key={comment.id?.id} id={comment.id?.id}>
							<p>{comment.text}</p>
							<div>
								by <address>{comment.name}</address>
							</div>
						</li>
					);
				})}
		</ul>
	);
};

export default CommentList;
