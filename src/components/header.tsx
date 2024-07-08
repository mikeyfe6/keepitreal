import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import * as headerStyles from '../styles/modules/header.module.scss';

const Header: React.FC = () => {
	return (
		<header className={headerStyles.header}>
			<div className={headerStyles.logo}>
				<StaticImage src='../images/KIR-light-logo.png' alt='KIR logo' />
			</div>

			<nav className={headerStyles.nav}>
				<ul>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#'>Workshops</a>
					</li>
					<li>
						<a href='#'>Over ons</a>
					</li>
					<li>
						<a href='#'>Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
