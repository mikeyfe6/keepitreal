import React, { useState } from 'react';

import { Link } from 'gatsby';

import { StaticImage } from 'gatsby-plugin-image';

import Hamburger from './hamburger';

import * as headerStyles from '../styles/modules/header.module.scss';

const Header: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className={headerStyles.header}>
			<div className={headerStyles.logo}>
				<Link to='/'>
					<StaticImage src='../images/logo/KIR-light-logo.png' alt='KIR logo' />
				</Link>
			</div>

			<div className={headerStyles.desktop}>
				<nav className={headerStyles.nav}>
					<ul>
						<li>
							<Link to='/' activeClassName={headerStyles.active}>
								Home
							</Link>
						</li>

						<li>
							<Link to='/workshops/' activeClassName={headerStyles.active}>
								Workshops
							</Link>
						</li>
						<li>
							<Link to='/over-ons/' activeClassName={headerStyles.active}>
								Over ons
							</Link>
						</li>
						<li>
							<Link to='/contact/' activeClassName={headerStyles.active}>
								Contact
							</Link>
						</li>
					</ul>
				</nav>

				<ul>
					<li>
						<a
							href='https://www.instagram.com/keepitrealkir'
							rel='noopener noreferrer'
							target='_blank'>
							<i className='fab fa-instagram fa-xl' />
						</a>
					</li>
					<li>
						<a
							href='https://www.tiktok.com/@keepitreal_nl'
							rel='noopener noreferrer'
							target='_blank'>
							<i className='fab fa-tiktok fa-xl' />
						</a>
					</li>
					<li>
						<a
							href='#!'
							// rel='noopener noreferrer'
							// target='_blank'
						>
							<i className='fab fa-facebook fa-xl' />
						</a>
					</li>
				</ul>
			</div>

			<div
				className={`${headerStyles.mobile} ${isOpen ? headerStyles.open : ''}`}>
				<ul>
					<li>
						<Link to='/' activeClassName={headerStyles.active}>
							Home
						</Link>
					</li>
					<li>
						<Link to='/over-ons' activeClassName={headerStyles.active}>
							Over Ons
						</Link>
					</li>
					<li>
						<Link to='/contact' activeClassName={headerStyles.active}>
							Contact
						</Link>
					</li>
				</ul>
			</div>

			<Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
		</header>
	);
};

export default Header;
