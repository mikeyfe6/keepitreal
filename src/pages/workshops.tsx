import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import { Seo } from '../components/seo';

import Layout from '../components/layout';

import * as workshopStyles from '../styles/modules/workshops.module.scss';

const WorkhopsPage: React.FC<PageProps> = () => {
	return (
		<Layout>
			<div className={workshopStyles.workshops}>
				<div>
					<h2>WorkshopsPage</h2>
					<p>
						Deze workshop dienen om jonge positieve ervaringen mee te geven,
						verdiepende gesprekken aan te gaan met mensen die qua ervaring op
						henzelf lijken. Het workshopaanbod ziet er als volgt uit.
					</p>
				</div>

				<ul>
					<li>
						<div>
							<h5>Workshop Genge</h5>
						</div>
						<div>
							Een therapeutische groepsles waarin tekenen het middel is. De
							inhoud wordt aangepast aan de groep. Belangrijke thema’s zijn :
							Verleidingen, keuzes en weerbaarheid.
						</div>
					</li>
					<li>
						<div>
							<h5>Workshop Genge</h5>
						</div>
						<div>
							Een therapeutische groepsles waarin tekenen het middel is. De
							inhoud wordt aangepast aan de groep. Belangrijke thema’s zijn :
							Verleidingen, keuzes en weerbaarheid.
						</div>
					</li>
					<li>
						<div>
							<h5>Workshop Genge</h5>
						</div>
						<div>
							Een therapeutische groepsles waarin tekenen het middel is. De
							inhoud wordt aangepast aan de groep. Belangrijke thema’s zijn :
							Verleidingen, keuzes en weerbaarheid.
						</div>
					</li>
					<li>
						<div>
							<h5>Workshop Genge</h5>
						</div>
						<div>
							Een therapeutische groepsles waarin tekenen het middel is. De
							inhoud wordt aangepast aan de groep. Belangrijke thema’s zijn :
							Verleidingen, keuzes en weerbaarheid.
						</div>
					</li>
					<li>
						<div>
							<h5>Workshop Genge</h5>
						</div>
						<div>
							Een therapeutische groepsles waarin tekenen het middel is. De
							inhoud wordt aangepast aan de groep. Belangrijke thema’s zijn :
							Verleidingen, keuzes en weerbaarheid.
						</div>
					</li>
					<li>
						<div>
							<h5>Workshop Genge</h5>
						</div>
						<div>
							Een therapeutische groepsles waarin tekenen het middel is. De
							inhoud wordt aangepast aan de groep. Belangrijke thema’s zijn :
							Verleidingen, keuzes en weerbaarheid.
						</div>
					</li>
					<li>
						<div>
							<h5>Workshop Genge</h5>
						</div>
						<div>
							Een therapeutische groepsles waarin tekenen het middel is. De
							inhoud wordt aangepast aan de groep. Belangrijke thema’s zijn :
							Verleidingen, keuzes en weerbaarheid.
						</div>
					</li>
				</ul>
			</div>
		</Layout>
	);
};

export default WorkhopsPage;

export const Head: HeadFC = () => <Seo />;
