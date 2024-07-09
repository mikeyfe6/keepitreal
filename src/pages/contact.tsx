import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import { Seo } from '../components/seo';

import Layout from '../components/layout';

const ContactPage: React.FC<PageProps> = () => {
	return (
		<Layout>
			<div>ContactPage</div>
		</Layout>
	);
};

export default ContactPage;

export const Head: HeadFC = () => <Seo />;
