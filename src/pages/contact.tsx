import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import { Seo } from '../components/seo';

import Layout from '../components/layout';

import Form from '../components/form';

import * as contactStyles from '../styles/modules/contact.module.scss';

const ContactPage: React.FC<PageProps> = () => {
	return (
		<Layout>
			<div className={contactStyles.contact}>
				<Form />
				<div>
					<h3>Dit is intro tekst betreft de contactformulier</h3>
					<p>
						Est amet laboris et ad mollit officia commodo qui duis esse qui
						exercitation in excepteur. Culpa sunt sit exercitation laboris
						occaecat non cupidatat sint dolore ullamco ut fugiat culpa. Deserunt
						exercitation sint sint irure aute aute pariatur aliqua.
					</p>
					<p>
						Est amet laboris et ad mollit officia commodo qui duis esse qui
						exercitation in excepteur. Culpa sunt sit exercitation laboris
						occaecat non cupidatat sint dolore ullamco ut fugiat culpa. Deserunt
						exercitation sint sint irure aute aute pariatur aliqua.
					</p>
					<p>
						Est amet laboris et ad mollit officia commodo qui duis esse qui
						exercitation in excepteur. Culpa sunt sit exercitation laboris
						occaecat non cupidatat sint dolore ullamco ut fugiat culpa. Deserunt
						exercitation sint sint irure aute aute pariatur aliqua.
					</p>
				</div>
			</div>
		</Layout>
	);
};

export default ContactPage;

export const Head: HeadFC = () => <Seo />;
