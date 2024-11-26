import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import { Seo } from '../components/seo';

import Layout from '../components/layout';

import Form from '../components/form';
import Maps from '../components/maps';

import * as contactStyles from '../styles/modules/contact.module.scss';

const ContactPage: React.FC<PageProps> = () => {
	return (
		<Layout>
			<div className={contactStyles.contact}>
				<Form />
				<div>
					<h3>
						<u>Contactinformatie</u>
					</h3>
					<h4>Bezoekadres & postadres:</h4>
					<h5>Stichting Keep It Real</h5>
					<p>
						Piet Heinkade 3, 1019 BR Amsterdam <br />
						Kvk<span>:</span> 94261237 <br />
						Bank<span>:</span> ​NL77 ABNA 0136 1411 96 <br />
						Email<span>:</span> Secretariaat@keeptreal.nl
					</p>

					{/* <p>
						<span>Telefoonnummer:</span> 0612345678 <br />
						<span>E-mailadres:</span> test@keeptreal.nl
					</p> */}
					<p>We zijn bereikbaar van maandag t/m vrijdag van 9:00 tot 17:00</p>
					{/* <p>
						<strong>KvK:</strong> 12345678 <br /> <strong>BTW:</strong>{' '}
						NL123456789B01
					</p> */}
					<Maps />
				</div>
			</div>
		</Layout>
	);
};

export default ContactPage;

export const Head: HeadFC = () => <Seo title='Neem Contact Op' />;
