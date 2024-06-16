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

			<div className={heroStyles.name}>
				<h1>
					<span>Wenner Regales</span>
					<span>
						Genomineerd voor: <br />
						<strong>Amsterdammer van het jaar 2024</strong>
					</span>
				</h1>
				<a
					href='https://amsterdammervanhetjaar.nl/wenner-regalus-founder-van-keep-it-real/'
					rel='noopener noreferrer'
					target='_blank'>
					Stem hier{' '}
					<i className='fa-solid fa-arrow-up-right-from-square fa-xs' />
				</a>
			</div>
		</section>
	);
};

export default Hero;
