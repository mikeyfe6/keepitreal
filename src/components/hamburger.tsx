import React from 'react';

import * as hamburgerStyles from '../styles/modules/hamburger.module.scss';

interface HamburgerProps {
	isOpen: boolean;
	toggleMenu: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, toggleMenu }) => {
	return (
		<div className={hamburgerStyles.hamburger}>
			<div
				className={`${hamburgerStyles.icon} ${
					isOpen ? hamburgerStyles.open : ''
				}`}
				onClick={toggleMenu}>
				<div className={hamburgerStyles.line} />
				<div className={hamburgerStyles.line} />
				<div className={hamburgerStyles.line} />
			</div>
		</div>
	);
};

export default Hamburger;
