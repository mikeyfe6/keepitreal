import React, { useState } from 'react';

import { Link } from 'gatsby';

import * as ctaStyles from '../styles/modules/cta.module.scss';

const Overlay = ({ item, onClose }) => (
	<div className={ctaStyles.ctaOverlay}>
		<div className={ctaStyles.ctaOverlayContent}>
			<div>
				<h3>{item.name}</h3>
				<p>{item.description}</p>
			</div>

			<button onClick={onClose}>Sluiten</button>
		</div>
	</div>
);

const Cta: React.FC = () => {
	const [selectedItem, setSelectedItem] = useState(null);
	const [isOverlayVisible, setIsOverlayVisible] = useState(false);

	const workshops = [
		{
			name: 'Genge',
			description:
				"Een therapeutische groepsles waarin tekenen wordt gebruikt als middel. De workshop behandelt thema's zoals verleidingen, keuzes en weerbaarheid, aangepast aan de behoeften van de groep.",
		},
		{
			name: 'Oorzaak-Gevolg',
			description:
				'Deze sessies gaan dieper in op het straatleven vanuit het perspectief van jongeren. Er wordt gebruik gemaakt van persoonlijke levenservaringen om jongeren te motiveren om op het rechte pad te blijven.',
		},
		{
			name: 'Identiteit',
			description:
				'Gericht op preventie voor jongeren, maar ook toepasbaar op leraren en ouders. Onderwerpen zijn onder andere zelfontdekking, weerbaarheid, groepsdruk, grenzen stellen en veiligheid op sociale media.',
		},
		{
			name: 'Beats by the Pound',
			description:
				"Jongeren werken samen met muziekproducenten om beats te maken, teksten te schrijven en zich creatief te uiten. Thema's die in de workshops worden behandeld, variëren en kunnen zich richten op onderwerpen als sexting, ruzies of liefde.",
		},
		{
			name: 'Oya Talks',
			description:
				'Interactieve sessies gebaseerd op het (straat)leven, waarbij stellingen worden gebruikt om dialogen te voeren over liefde, veiligheid, discriminatie en mentale gezondheid.',
		},
		{
			name: 'Drill 101',
			description:
				'Een diepgaande analyse van de drillcultuur, waarbij jongeren klassikale dialogen voeren over de rol van de media en de impact van drill in de echte wereld.',
		},
		{
			name: 'Drum / Muziek',
			description:
				'Jongeren leren hun emoties uiten door middel van muziek en beweging. Drummen wordt gebruikt als een therapeutisch middel om stress te verminderen en de mentale gezondheid te versterken.',
		},
		{
			name: 'Online weerbaarheid',
			description:
				"Diepgaande besprekingen over online uitdagingen zoals shaming, sexting en online pesten, om jongeren bewust te maken van de risico's en hen te helpen zichzelf te beschermen.",
		},
		{
			name: 'Social Media',
			description:
				'Een veilige ruimte waarin jongeren kunnen praten over de werkelijkheid achter sociale media, met aandacht voor onderwerpen als body shaming, intimidatie en online veiligheid.',
		},
		{
			name: 'Fashion and Identity',
			description:
				'Creatieve workshops waarin jongeren hun eigen identiteit kunnen verkennen en trots kunnen zijn op hun creatieve expressie.',
		},
		{
			name: 'Sport',
			description:
				'Sessies gericht op mentale gezondheid, discipline en een gezonde levensstijl, waarbij de nadruk ligt op het belang van een gezond lichaam en geest.',
		},
		{
			name: 'Spoken Word',
			description:
				"Door middel van storytelling worden actuele thema's aangekaart, zoals zelfdoding, om jongeren aan te moedigen open te zijn over hun emoties en ervaringen.",
		},
	];

	return (
		<section className={ctaStyles.cta}>
			<h2>Wat We Doen </h2>

			<p>
				Diepgaande sessies waarin jongeren hun creativiteit kunnen uiten en
				thema's kunnen verkennen zoals verleidingen, identiteit, en online
				veiligheid. Van therapeutische tekenlessen tot
				muziekproductie-workshops, we bieden een breed scala aan mogelijkheden.
			</p>

			<div className={ctaStyles.ctaWrapper}>
				<ul>
					{workshops.map((workshop, index) => (
						<li
							key={index}
							onClick={() => {
								setSelectedItem(workshop);
								setIsOverlayVisible(true);
							}}>
							{workshop.name}
						</li>
					))}
				</ul>

				{isOverlayVisible && selectedItem && (
					<Overlay
						item={selectedItem}
						onClose={() => setIsOverlayVisible(false)}
					/>
				)}
			</div>
		</section>
	);
};

export default Cta;
