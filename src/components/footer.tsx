import React from 'react';

import * as footerStyles from '../styles/modules/footer.module.scss';

const Footer: React.FC = () => {
	return (
		<footer className={footerStyles.footer}>
			<div className={footerStyles.footerContainer}>
				<p>© 2024 - Keep It Real </p>
				<ul>
					<li>
						<a
							href='https://www.instagram.com/keepitrealkir'
							rel='noopener noreferrer'
							target='_blank'>
							<i className='fab fa-instagram fa-lg' />
						</a>
					</li>
					<li>
						<a
							href='https://www.tiktok.com/@keepitreal_nl'
							rel='noopener noreferrer'
							target='_blank'>
							<i className='fab fa-tiktok fa-lg' />
						</a>
					</li>
					<li>
						<a
							href='#!'
							// rel='noopener noreferrer'
							// target='_blank'
						>
							<i className='fab fa-facebook fa-lg' />
						</a>
					</li>
				</ul>

				<p>
					Powered by{' '}
					<a
						href='https://menefex.nl'
						rel='noopener noreferrer'
						target='_blank'
						className={footerStyles.menefex}>
						Menefex
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
