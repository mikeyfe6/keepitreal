import React from 'react';

import * as footerStyles from '../styles/modules/footer.module.scss';

const Footer: React.FC = () => {
	return (
		<footer className={footerStyles.footer}>
			<div className={footerStyles.footerContainer}>
				<p>© 2024 - Keep It Real </p>
				<ul>
					<li>
						<i className='fab fa-instagram fa-xl'></i>
					</li>
					<li>
						<i className='fab fa-tiktok fa-xl'></i>
					</li>
				</ul>

				<p>Powered by Menefex</p>
			</div>
		</footer>
	);
};

export default Footer;
