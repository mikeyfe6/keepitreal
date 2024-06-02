import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';

import * as indexStyles from '../styles/modules/index.module.scss';

const IndexPage: React.FC<PageProps> = () => {
	return (
		<Layout>
			<div className={indexStyles.landingPage}>
				<div className={indexStyles.landingPageContent}>
					<StaticImage
						src='../images/KIR-light-logo.png'
						alt='KIR logo'
						className={indexStyles.logo}
					/>

					<StaticImage
						src='../images/wenner.jpeg'
						alt='Wenner'
						className={indexStyles.wenner}
					/>

					<StaticImage
						src='../images/AVHJ.png'
						alt='Wenner'
						className={indexStyles.avhj}
					/>
				</div>
			</div>
		</Layout>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Keep It Real</title>;
