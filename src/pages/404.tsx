import * as React from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';

import { Seo } from '../components/seo';

const NotFoundPage: React.FC<PageProps> = () => {
	return (
		<main>
			<h1>Pagina niet gevonden</h1>
		</main>
	);
};

export default NotFoundPage;

export const Head: HeadFC = () => (
	<Seo title='Pagina niet gevonden' pathname='/404/' />
);
