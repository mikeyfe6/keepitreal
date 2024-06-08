import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import * as heroStyles from '../styles/modules/hero.module.scss';

const Hero: React.FC = () => {
	return (
		<section className={heroStyles.hero}>
			<div className={heroStyles.heroContainer}>
				<div className={heroStyles.heroWrapper}>
					<StaticImage
						src='../images/wenner.jpeg'
						alt='Wenner'
						className={heroStyles.wenner}
					/>

					<StaticImage
						src='../images/AVHJ.png'
						alt='Wenner'
						className={heroStyles.avhj}
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
