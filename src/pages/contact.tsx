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
					<h3>Contactinformatie</h3>
					<p>
						<span>Bezoekadres / postadres</span>
						<br />
						Straatnaam 123 <br /> 1111 AA Plaatsnaam
					</p>
					<p>
						<span>Telefoonnummer:</span> 0612345678 <br />
						<span>E-mailadres:</span> test@keeptreal.nl
					</p>
					<p>
						We zijn open/bereikbaar van maandag t/m vrijdag van 9:00 tot 17:00
					</p>

					<p>
						<span>KvK:</span> 12345678 <br /> <span>BTW:</span> NL123456789B01
					</p>

					<Maps />
				</div>
			</div>
		</Layout>
	);
};

export default ContactPage;

export const Head: HeadFC = () => <Seo title='Neem Contact Op' />;
