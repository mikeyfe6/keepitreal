import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import { Seo } from '../components/seo';

import Layout from '../components/layout';

const WorkhopsPage: React.FC<PageProps> = () => {
	return (
		<Layout>
			<div>WorkhopsPage</div>
		</Layout>
	);
};

export default WorkhopsPage;

export const Head: HeadFC = () => <Seo />;
