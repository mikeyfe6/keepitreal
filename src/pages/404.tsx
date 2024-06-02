import * as React from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';

const NotFoundPage: React.FC<PageProps> = () => {
	return (
		<main>
			<h1>Pagina niet gevonden</h1>
		</main>
	);
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Niet gevonden!</title>;
