import React from 'react';

// import { Link } from 'gatsby';

import * as sidebarStyles from '../styles/modules/sidebar.module.scss';

const Cta: React.FC = () => {
	return (
		<aside className={sidebarStyles.aside}>
			<div>
				<ul>
					<li>Onze Missie</li>
					<li>Wat We Doen:</li>
					<li>- KIR Take-overs</li>
					<li>- KIR Workshops</li>
					<li>- 1-op-1 Coaching</li>
					<li>Onze Teamleden</li>
					<li>Impact en Toekomst</li>
					<li>Word Lid van Keep It Real</li>
					<li>In de Media</li>
					<li>Beluister onze Podcast</li>
				</ul>
			</div>
		</aside>
	);
};

export default Cta;