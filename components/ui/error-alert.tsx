import classes from './error-alert.module.css';

interface IErrorAlert {
	children: React.ReactNode;
}

const ErrorAlert = ({ children }: IErrorAlert) => {
	return <div className={classes.alert}>{children}</div>;
};

export default ErrorAlert;
