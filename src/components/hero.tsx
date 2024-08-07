import React, { useEffect, useState } from 'react';

import { useLocation } from '@reach/router';

import { Link } from 'gatsby';

import { StaticImage } from 'gatsby-plugin-image';

import * as heroStyles from '../styles/modules/hero.module.scss';

const Hero: React.FC = () => {
	const { pathname } = useLocation();

	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth < 641);
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const isHomeAndSmallScreen = pathname === '/' && isSmallScreen;

	return (
		<section className={heroStyles.hero}>
			{(isHomeAndSmallScreen || !isSmallScreen) && (
				<div className={heroStyles.slogan}>
					<h1>
						<span>
							Welkom bij <strong>Keep It Real</strong>, een programma dat
							jongeren
						</span>{' '}
						<span>
							een ervaring biedt die verder gaat dan{' '}
							<strong>traditioneel onderwijs</strong>
						</span>
					</h1>
					<div className={heroStyles.buttons}>
						<Link to='/workshops/'>Workshops</Link>
						<Link to='/contact/'>Contact</Link>
					</div>
				</div>
			)}

			<div className={heroStyles.line} />

			<div className={heroStyles.image}>
				<StaticImage src='../images/hero.jpg' alt='' />
			</div>
		</section>
	);
};

export default Hero;
