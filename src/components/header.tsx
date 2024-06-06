import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import * as headerStyles from '../styles/modules/header.module.scss';

const Header: React.FC = () => {
	return (
		<header className={headerStyles.header}>
			<StaticImage
				src='../images/KIR-light-logo.png'
				alt='KIR logo'
				className={headerStyles.logo}
			/>
		</header>
	);
};

export default Header;
