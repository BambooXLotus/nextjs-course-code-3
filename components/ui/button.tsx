import Link from 'next/link';

import styles from './button.module.css';

interface IButton {
	link?: string;
	children: React.ReactNode;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: IButton) => {
	if (props.link) {
		return (
			<Link href={props.link}>
				<a className={styles.btn}>{props.children}</a>
			</Link>
		);
	}

	return (
		<button className={styles.btn} onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export default Button;
