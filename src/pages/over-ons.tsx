import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import { Seo } from '../components/seo';

import Layout from '../components/layout';

import * as aboutStyles from '../styles/modules/about.module.scss';

const AboutUsPage: React.FC<PageProps> = () => {
	return (
		<Layout>
			<div className={aboutStyles.about}>
				<p>
					Het KIR programma is een initiatief van cultureel professional Wenner
					Regales, geboren op Curaçao en zelf grotendeels opgegroeid in
					Amsterdam, heeft door zijn jarenlange ervaring door het werken met
					jongeren een enorm netwerk gecreëerd met professionals, die ook vanuit
					hun eigen ervaring iets kunnen bijdragen aan de positieve ontwikkeling
					van onze jeugd. Een aantal van de professionals waar hij mee werkt,
					heeft hij nu bij elkaar gebracht om het project KIR op te starten. KIR
					is gestart als een ééndaags programma op het Maarten van Rossem (VMBO)
					en Leerpark Presikhaaf (VMBO en praktijk onderwijs) in Arnhem en het
					OCZO, de Dreef en OSB in Amsterdam.
				</p>

				<p>
					De vraag was om een dag/ochtend te organiseren waarbij de leerlingen
					geen “les” maar een echte “experience” binnen het thema veiligheid.
					Het team van ervaringsdeskundigen informeerden en motiveerden de
					leerlingen om positieve keuzes in het leven te maken en kansen te
					grijpen. Deze dagen werden zowel door de jongeren als hun docenten en
					de ketenpartners als zeer positief ervaren. Kinderen vertelden de
					teamleden over dingen die zich afspeelden op school waar de docenten
					niks van wisten, luisterden ademloos naar de verhalen van de
					teamleden. De scholen kregen nieuwe inzichten over de benadering van
					leerlingen en zagen dat hun leerlingen intrinsiek geïnteresseerd waren
					in wat de teamleden te vertellen, hen te leren hadden. Het werd al
					gauw duidelijk dat de aanpak de potentie had om impact te maken, mits
					het een duurzaam en ingebed programma betrof.
				</p>

				<p>
					KIR is zich sindsdien aan het ontwikkelen tot een lessenreeks,
					bestaande uit startdagen, workshops, individuele coaching en
					groepsactiviteiten voor jongens en meiden en ouders. Iedere persoon
					die een onderdeel verzorgt in het programma, is een
					ervaringsdeskundige. De inzet van ervaringsdeskundigen stoelt op een
					aantal begeleidingsmechanismen1 die in reguliere begeleidingsvormen
					niet, minder of anders aanwezig zijn.
				</p>
			</div>
		</Layout>
	);
};

export default AboutUsPage;

export const Head: HeadFC = () => <Seo />;
