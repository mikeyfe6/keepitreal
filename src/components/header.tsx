import React from 'react';

import { Link } from 'gatsby';

import { StaticImage } from 'gatsby-plugin-image';

import * as headerStyles from '../styles/modules/header.module.scss';

const Header: React.FC = () => {
	return (
		<header className={headerStyles.header}>
			<div className={headerStyles.logo}>
				<StaticImage src='../images/KIR-light-logo.png' alt='KIR logo' />
			</div>

			<div>
				<nav className={headerStyles.nav}>
					<ul>
						<li>
							<Link to='/' activeClassName={headerStyles.active}>
								Home
							</Link>
						</li>
						<li>
							<Link to='/over-ons/' activeClassName={headerStyles.active}>
								Workshops
							</Link>
						</li>
						<li>
							<Link to='/workshops/' activeClassName={headerStyles.active}>
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
		</header>
	);
};

export default Header;
