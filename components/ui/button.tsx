import Link from 'next/link';

import styles from './button.module.css';

interface IButton {
	link: string;
	children: React.ReactNode;
}

const Button = (props: IButton) => {
	return (
		<Link href={props.link}>
			<a className={styles.btn}>{props.children}</a>
		</Link>
	);
};

export default Button;
