import { Fragment } from 'react';

import MainHeader from './main-header';

interface ILayout {
	children: React.ReactChild;
}

const Layout = ({ children }: ILayout) => {
	return (
		<Fragment>
			<MainHeader></MainHeader>
			<main>{children}</main>
		</Fragment>
	);
};

export default Layout;
