import React from 'react';

import { Link } from 'gatsby';

import * as sidebarStyles from '../styles/modules/sidebar.module.scss';

interface SidebarProps {
	handleSidebarClick: (sectionId: string) => void;
	activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({
	handleSidebarClick,
	activeSection,
}) => {
	return (
		<aside className={sidebarStyles.aside}>
			<div>
				<h4>KiR</h4>
				<ul>
					<li>
						<button
							onClick={() => handleSidebarClick('missie')}
							className={
								activeSection === 'missie' ? sidebarStyles.active : ''
							}>
							Onze Missie
						</button>
					</li>
					<li>
						<button
							onClick={() => handleSidebarClick('whatwedo')}
							className={
								activeSection === 'whatwedo' ? sidebarStyles.active : ''
							}>
							<u>Wat We Doen</u>
						</button>
						<ul>
							<li>
								<Link to='/'>KIR Take-overs</Link>
							</li>
							<li>
								<Link to='/'>KIR Workshops</Link>
							</li>
							<li>
								<Link to='/'>1-op-1 Coaching</Link>
							</li>
						</ul>
					</li>
					<li>
						<Link to='/'>Onze Teamleden</Link>
					</li>
					<li>
						<button
							onClick={() => handleSidebarClick('impact')}
							className={
								activeSection === 'impact' ? sidebarStyles.active : ''
							}>
							Impact en Toekomst
						</button>
					</li>
					<li>
						<Link to='/'>In de Media </Link>
					</li>
				</ul>
			</div>

			<div>
				<h4>Opkomende evenementen</h4>

				<ul>
					<li>
						<img src='' alt='' />
						<p>plaats:</p>
						<p>tijd/datum:</p>
					</li>
				</ul>
			</div>

			<div>
				<iframe
					title='Keep It Real Podcast'
					src='https://open.spotify.com/embed/show/7wDDGz0HtXhn3WPCJ3KLcO?utm_source=generator'
					allowFullScreen={true}
					allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
					// loading='lazy'
					className='spotify'
				/>
			</div>

			<div>
				<h4>Word Lid van Keep It Real</h4>

				<p>
					Wil je deel uitmaken van ons team of meer informatie over onze
					programma's?
				</p>

				<p>
					Neem contact met ons op via onze website of sociale media. Samen
					kunnen we het verschil maken voor de jongeren van vandaag en morgen.{' '}
					<strong>Keep it real!</strong>
				</p>
			</div>
		</aside>
	);
};

export default Sidebar;
