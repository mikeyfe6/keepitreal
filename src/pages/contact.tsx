import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import { Seo } from '../components/seo';

import Layout from '../components/layout';

import * as contactStyles from '../styles/modules/contact.module.scss';

const ContactPage: React.FC<PageProps> = () => {
	return (
		<Layout>
			<div className={contactStyles.contact}>
				<div>form</div>
				<div>texst</div>
			</div>
		</Layout>
	);
};

export default ContactPage;

export const Head: HeadFC = () => <Seo />;
