import React, { useState, useEffect } from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import { useLocation } from '@reach/router';

import { StaticImage } from 'gatsby-plugin-image';

import { Seo } from '../components/seo';

import Layout from '../components/layout';

import * as workshopStyles from '../styles/modules/workshops.module.scss';

const WorkhopsPage: React.FC<PageProps> = () => {
	const [activeSection, setActiveSection] = useState<string>('');

	const { hash } = useLocation();

	useEffect(() => {
		setActiveSection(hash);
	}, [hash]);

	return (
		<Layout>
			<div className={workshopStyles.workshops} id='workshops'>
				<div>
					<h2>Workshops</h2>
					<p>
						Deze workshops dienen om jonge positieve ervaringen mee te geven,
						verdiepende gesprekken aan te gaan met mensen die qua ervaring op
						henzelf lijken. Het workshopaanbod ziet er als volgt uit.
					</p>
				</div>

				<ul>
					<li
						id='genge'
						className={activeSection === '#genge' ? workshopStyles.active : ''}>
						<div className={workshopStyles.workshopsImage}>
							<StaticImage
								src='../images/workshops/genge.tiff'
								alt='Workshop Genge'
							/>
						</div>
						<div className={workshopStyles.workshopsContent}>
							<h3>Workshop Genge</h3>
							<p>
								Een therapeutische groepsles waarin tekenen het middel is. De
								inhoud wordt aangepast aan de groep. Belangrijke thema’s zijn:
								Verleidingen, keuzes en weerbaarheid.
							</p>

							<hr />

							<div className={workshopStyles.workshopsHolder}>
								<p>Workshophouder:</p>
								<div className={workshopStyles.workshopsHolderInfo}>
									<h6>Kenny Brenet</h6>
									<span>&middot;</span>
									<a href='mailto:s.g.brenet@gmail.com'>
										<i className='fa-solid fa-right-long' />
										<i className='fa-solid fa-square-envelope fa-xl' />
									</a>
								</div>
							</div>

							<p className={workshopStyles.workshopsBio}>
								Kenny Brenet is een ervaringsdeskundige van het straatleven.
								Zijn expressie in kunst is tekenen. Hij geeft in zijn dagelijks
								leven therapeutische groepslessen aan jongeren en therapie aan
								AA groepen voor volwassenen. Kenny was vanaf jong bezig met
								criminaliteit; vanaf zijn 13e zat hij in de nieuwe Lloyd
								(jeugdgevangenis). Veel van zijn vrienden zijn dood of achter
								tralies en dat was een plek waar hij niet wilde eindigen. In de
								Vught gevangenis kwam hij in aanraking met de bijbel waarna hij
								zijn leven hieraan ging toewijden. Hij put kracht uit zijn
								geloof en via deze weg wilt hij de volgende generatie positief
								beïnvloeden.
							</p>
						</div>
					</li>

					<li
						id='oorzaak-gevolg'
						className={
							activeSection === '#oorzaak-gevolg' ? workshopStyles.active : ''
						}>
						<div className={workshopStyles.workshopsImage}>
							<StaticImage
								src='../images/workshops/gevolg-oorzaak.tiff'
								alt='Workshop Oorzaak: Gevolg - De Oorzaak'
							/>
						</div>
						<div className={workshopStyles.workshopsContent}>
							<h3>Workshop Oorzaak: Gevolg - De Oorzaak</h3>
							<p>
								Gevolg-sessies gaan in op het straatleven vanuit de belevenis
								van jongeren. Vanuit de eigen levenservaring gaat de
								workshophouder met de jongeren in gesprek om ze te motiveren om
								op het rechte pad te blijven.
							</p>

							<hr />

							<div className={workshopStyles.workshopsHolder}>
								<p>Workshophouder:</p>
								<div className={workshopStyles.workshopsHolderInfo}>
									<h6>F.I.</h6>
									<span>&middot;</span>
									<a href='mailto:l.g.ramazan2@icloud.com'>
										<i className='fa-solid fa-right-long' />
										<i className='fa-solid fa-square-envelope fa-xl' />
									</a>
								</div>
							</div>

							<p className={workshopStyles.workshopsBio}>
								F.I. is een straatlegende van Amsterdam Zuidoost, beter bekend
								als de Bijlmer. In de media wordt hij nog steeds gezien als de
								baas van de bende Green Gang, maar zelf is hij nu CEO van
								platenmaatschappij Capital 77 Records. Hij is het boegbeeld van
								een “gangster” die, na 10 jaar van zijn leven aan de straat te
								hebben gegeven, het ver heeft geschopt als rapper en Nederland
								introduceerde aan de talenten van Djaga Djaga, Green Gang, Mario
								Cash, Scarface en recentelijk C. Smoke.
							</p>
						</div>
					</li>

					<li
						id='identiteit'
						className={
							activeSection === '#identiteit' ? workshopStyles.active : ''
						}>
						<div className={workshopStyles.workshopsImage}>
							<StaticImage
								src='../images/workshops/identiteit.tiff'
								alt='Workshop Identiteit'
							/>
						</div>
						<div className={workshopStyles.workshopsContent}>
							<h3>Workshop Identiteit</h3>
							<p>
								Dit onderdeel is gericht op preventieve aanpak voor jongeren,
								maar ook toepasbaar op leraren en ouders. Onderdelen die aan de
								orde komen zijn onder andere: wie ben ik, wat wil ik,
								weerbaarheid, groepsdruk, grenzen aangeven, casus-beschrijving
								(non –fictie), jongeren worden geconfronteerd,
								communicatietraining, veiligheid op Social Media; schokkende
								content, online pesten, intimidatie en sexting.
							</p>

							<hr />

							<div className={workshopStyles.workshopsHolder}>
								<p>Workshophouder:</p>
								<div className={workshopStyles.workshopsHolderInfo}>
									<h6>Melanie Falix</h6>
									<span>&middot;</span>
									<a href='mailto:m.falix@hotmail.com'>
										<i className='fa-solid fa-right-long' />
										<i className='fa-solid fa-square-envelope fa-xl' />
									</a>
								</div>
							</div>

							<p className={workshopStyles.workshopsBio}>
								Melanie Falix is een ervaren jongerenwerker uit Amsterdam
								Zuidoost. Melanie is zeer bekend met de doelgroep waardoor ze
								haar ervaring omzet in een workshop Identiteit.
							</p>
						</div>
					</li>

					<li
						id='beats-by-the-pound'
						className={
							activeSection === '#beats-by-the-pound'
								? workshopStyles.active
								: ''
						}>
						<div className={workshopStyles.workshopsImageDouble}>
							<StaticImage
								src='../images/workshops/beats-pound-1.tiff'
								alt='Workshop Beats by the Pound'
							/>
							<StaticImage
								src='../images/workshops/beats-pound-2.tiff'
								alt='Workshop Beats by the Pound'
							/>
						</div>
						<div className={workshopStyles.workshopsContent}>
							<h3>Workshop Beats by the Pound</h3>
							<p>
								Tijdens deze workshop werken producers vanuit de music business
								met jongeren, die interesse hebben in het maken van beats, mixen
								of teksten schrijven. Tijdens de workshop leren jongeren zich te
								uiten, presenteren en thematisch te schrijven. Over ieder thema
								dat de school belangrijk vindt, kan er een tekst worden gemaakt,
								bijvoorbeeld over sexting, ruzies of liefde. Aan het einde zal
								de klas hun tekst presenteren aan de groep, wat vaak mooie
								momenten oplevert en verbinding maakt binnen de groep. De
								workshop is interactief.
							</p>

							<hr />

							<div className={workshopStyles.workshopsHolder}>
								<p>Workshophouders:</p>
								<div className={workshopStyles.workshopsHolderInfo}>
									<h6>Franco III</h6>
									<span>&middot;</span>
									<a href='mailto:francothethird3@gmail.com'>
										<i className='fa-solid fa-right-long' />
										<i className='fa-solid fa-square-envelope fa-xl' />
									</a>
								</div>
								<span>&</span>
								<div className={workshopStyles.workshopsHolderInfo}>
									<h6>Mxller</h6>
									<span>&middot;</span>
									<a href='mailto:mxller444@gmail.com'>
										<i className='fa-solid fa-right-long' />
										<i className='fa-solid fa-square-envelope fa-xl' />
									</a>
								</div>
							</div>

							<p className={workshopStyles.workshopsBio}>
								Franco III en Mxller: Deze twee zijn opgegroeid in Amsterdam
								Zuidoost in de bekende “probleemwijken”. Ze zijn zelf nog jong
								waardoor jongeren zich met hen identificeren. Zij zijn producers
								en zijn bekend van grote urban bekendheden als Wizkid, Kodak
								Black en Broederliefde.
							</p>
						</div>
					</li>

					<li
						id='oya-talks'
						className={
							activeSection === '#oya-talks' ? workshopStyles.active : ''
						}>
						<div className={workshopStyles.workshopsImage}>
							<StaticImage
								src='../images/workshops/oya-walks.tiff'
								alt='Workshop Oya Talks'
							/>
						</div>
						<div className={workshopStyles.workshopsContent}>
							<h3>Workshop Oya Talks</h3>
							<p>
								De stellingen tijdens de sessies zijn gebaseerd op het
								(straat)leven. De stellingen gaan over liefde, onveilige
								situaties in de brede zin, discriminatie, thuissituatie,
								vriendengroep, groepsdruk, handvaten en vooral de kwetsbaarheid
								van het jongerenleven. Mental health staat centraal.
							</p>

							<hr />

							<div className={workshopStyles.workshopsHolder}>
								<p>Workshophouder:</p>
								<div className={workshopStyles.workshopsHolderInfo}>
									<h6>Bradley Mensah</h6>
									<span>&middot;</span>
									<a href='mailto:edmondmensah96@gmail.com'>
										<i className='fa-solid fa-right-long' />
										<i className='fa-solid fa-square-envelope fa-xl' />
									</a>
								</div>
							</div>

							<p className={workshopStyles.workshopsBio}>
								Bradley Mensah is een ervaringsdeskundige die zelf slachtoffer
								en uitvoerder is geweest van het straatleven. Op jonge leeftijd
								ondervond hij dat het straatleven niet loont, waardoor hij Oya
								Talk heeft opgezet om te praten met jongeren over hun pijn.
							</p>
						</div>
					</li>

					<li
						id='drill-101'
						className={
							activeSection === '#drill-101' ? workshopStyles.active : ''
						}>
						<div className={workshopStyles.workshopsImage}>
							<StaticImage
								src='../images/workshops/drill-101.tiff'
								alt='Workshop Drill 101'
							/>
						</div>
						<div className={workshopStyles.workshopsContent}>
							<h3>Workshop Drill 101</h3>
							<p>
								Drill is een hot item in de media, onder de jeugd en huiskamers.
								Maar wat is drill precies? Hoe komt het dat het momenteel de
								krantenkoppen domineert? Tijdens deze workshop wordt de
								historie, de allure en de buurten/scholen geanalyseerd om een
								beeld te krijgen van wat zich in de wijken afspeelt. Aan de hand
								van een paar stellingen worden er klassikaal dialogen gevoerd
								over de belevenis van drill in de echte wereld, niet online. Een
								vaste stelling: hoe groot schatten jullie de rol van de media in
								de belevenis die er is van de dril-scene?
							</p>

							<hr />

							<div className={workshopStyles.workshopsHolder}>
								<p>Workshophouder:</p>
								<div className={workshopStyles.workshopsHolderInfo}>
									<h6>Wenner Regales</h6>
									<span>&middot;</span>
									<a href='mailto:regalnessnl@gmail.com'>
										<i className='fa-solid fa-right-long' />
										<i className='fa-solid fa-square-envelope fa-xl' />
									</a>
								</div>
							</div>

							<p className={workshopStyles.workshopsBio}>
								Wenner is opgegroeid deels op Curaçao en deels in NL,
								grotendeels in achterstandswijken. Heeft zichzelf opgewerkt tot
								waar hij nu is. Waardoor hij de verschillende werelden snapt en
								aan elkaar kan verbinden. Leerlingen denken dat er maar 1 wereld
								is. Wenner leert leerlingen hoe je kan komen waar je wil. Door
								inzet en discipline.
							</p>
						</div>
					</li>

					<li
						id='drum-muziek'
						className={
							activeSection === '#drum-muziek' ? workshopStyles.active : ''
						}>
						<div className={workshopStyles.workshopsImage}>
							<StaticImage
								src='../images/workshops/drum-muziek.tiff'
								alt='Workshop Drum / Muziek'
							/>
						</div>
						<div className={workshopStyles.workshopsContent}>
							<h3>Workshop Drum / Muziek</h3>
							<p>
								Tijdens deze workshop wordt aan jongeren geleerd om hun
								gevoelens d.m.v. muziek/beweging te uiten. Drummen zorgt voor
								ontspanning, wat de bloeddruk verlaagt , stress vermindert en
								het versterken van de mentale gezondheid. Daarnaast kan het
								maken van muziek klachten van depressie en angst verlagen.
							</p>

							<hr />

							<p className={workshopStyles.workshopsBio}>
								Saffira van Kanten is geboren in Amsterdam. Drummen en het
								produceren van muziek zijn haar passie en leven. Op haar 13e is
								ze begonnen met drummen bij The Originals entertainment en daar
								drumt ze nog steeds. Op haar 27e heeft ze besloten mijn
								muzikaliteit te verbreden en ben begonnen met het produceren van
								muzieknummers. In 2016 is ze als ondernemer gestart met geven
								van muzikale workshops en inspireert zij de jeugd met mijn
								muziek en levenservaring. Momenteel werkt ze voornamelijk in
								jeugdgevangenissen en jeugdzorg en instellingen.
							</p>
						</div>
					</li>

					<li
						id='online-weerbaarheid'
						className={
							activeSection === '#online-weerbaarheid'
								? workshopStyles.active
								: ''
						}>
						<div className={workshopStyles.workshopsImage}>
							<StaticImage
								src='../images/workshops/online-weerbaarheid.tiff'
								alt='Workshop Online weerbaarheid'
							/>
						</div>
						<div className={workshopStyles.workshopsContent}>
							<h3>Workshop Online weerbaarheid</h3>
							<p>
								Bij de workshop online weerbaarheid gaan we diep op in wat de
								jongeren meemaken in hun online leefwereld. Zo komen topics als
								online shaming, exposen, sexting en online pesterijen aan bod.
								Door deze topics te bespreken, wordt door de workshopleider een
								gevoelige snaar geraakt, waardoor de jongeren zich openen voor
								een gesprek over wat zich afspeelt in de online leefwereld.
							</p>

							<hr />

							<div className={workshopStyles.workshopsHolder}>
								<p>Workshophouder:</p>
								<div className={workshopStyles.workshopsHolderInfo}>
									<h6>Kimberley Leysner</h6>
									<span>&middot;</span>
									<a href='mailto:kimberley_leysner@hotmail.com'>
										<i className='fa-solid fa-right-long' />
										<i className='fa-solid fa-square-envelope fa-xl' />
									</a>
								</div>
							</div>

							<p className={workshopStyles.workshopsBio}>
								Kimberley Leysner is al vele jaren jongerenwerker in Amsterdam
								zuidoost en heeft in alle wijken gewerkt. Begonnen als
								kinderwerker en daarna gespecialiseerd als jongerenwerker en
								meidenwerker. Naast het meidenwerk heeft zij ook
								vindplaatsgericht jongerenwerk gedaan zoals het werken met de
								lastigere doelgroep.
							</p>
						</div>
					</li>

					<li
						id='social-media'
						className={
							activeSection === '#social-media' ? workshopStyles.active : ''
						}>
						<div className={workshopStyles.workshopsContent}>
							<h3>Workshop Social Media</h3>
							<p>
								We stappen in de leefwereld van social media en creëren een safe
								space in dialogen waarin influencers aan bod komen. Er wordt
								kenbaar gemaakt dat “niets is wat het lijkt”. Een belangrijk
								uitgangspunt bij de dialoogbijeenkomsten is dat de thema’s
								herkenbaar moeten zijn, aansluiten op de leefwereld en de
								problematiek die leerlingen ervaren. Thema’s waaronder ook die
								waarop een taboe heerst, zijn onderwerpen als sociale media,
								wonen, arbeidsmarkt, body shaming, intimidatie en veiligheid.
								Door creatieve activatie met a true real talk zal er meer
								diepgang zijn met als doel de leerlingen andere inzichten te
								geven.
							</p>
						</div>
					</li>

					<li
						id='fashion-and-identity'
						className={
							activeSection === '#fashion-and-identity'
								? workshopStyles.active
								: ''
						}>
						<div className={workshopStyles.workshopsImage}>
							<StaticImage
								src='../images/workshops/fashion.tiff'
								alt='Workshop Fashion and identity'
							/>
						</div>
						<div className={workshopStyles.workshopsContent}>
							<h3>Workshop Fashion and identity</h3>
							<p>
								Tijdens de workshops krijgen de leerlingen de mogelijkheid om
								hun creativiteit te benutten en tijdens de gesprekken krijgt de
								workshophouder diepgang over de interesses van de leerlingen. Er
								wordt iets gecreëerd waar jongeren trots op zijn. Zelfs als ze
								dachten niet creatief te zijn.
							</p>

							<hr />

							<div className={workshopStyles.workshopsHolder}>
								<p>Workshophouder:</p>
								<div className={workshopStyles.workshopsHolderInfo}>
									<h6>Naomi Rosheuvel</h6>
									<span>&middot;</span>

									<a
										href='mailto:nomibynaomi@gmail.com
'>
										<i className='fa-solid fa-right-long' />
										<i className='fa-solid fa-square-envelope fa-xl' />
									</a>
								</div>
							</div>

							<p className={workshopStyles.workshopsBio}>
								Naomi is opgegroeid in ’t oosten van het land. Daar voelde zij
								zich door haar huidskleur niet altijd geaccepteerd of begrepen,
								zij werd gediscrimineerd. Zij was het onbegrepen zwarte kind in
								het witte schoolsysteem. Ze heeft ervaren hoe belangrijk het is
								om te weten waar je vandaan komt en hoe je jezelf mag zijn in
								een systeem dat je niet altijd begrijpt. Zij is dus op jonge
								leeftijd al naar Amsterdam gekomen waar zij zichzelf heeft
								ontwikkeld tot Fashion maker en pedagoog.
							</p>
						</div>
					</li>

					<li
						id='sport'
						className={activeSection === '#sport' ? workshopStyles.active : ''}>
						<div className={workshopStyles.workshopsContent}>
							<h3>Workshop Sport</h3>
							<p>
								Tijdens de workshops sport wordt bij de jongeren de focus op
								mentale gezondheid, discipline en een gezond lichaam gelegd.
							</p>
						</div>
					</li>

					<li
						id='spoken-word'
						className={
							activeSection === '#spoken-word' ? workshopStyles.active : ''
						}>
						<div className={workshopStyles.workshopsContent}>
							<h3>Workshop Spoken Word</h3>
							<p>
								Door middel van storytelling worden thema’s aangekaart, die
								momenteel actueel zijn bij jongeren zoals o.a. zelfdoding;
								momenteel eén van de belangrijkste oorzaken bij de jongeren in
								Nederland.
							</p>

							<hr />

							<p className={workshopStyles.workshopsBio}>
								Hij combineert zijn levenservaring (o.a. gevlucht uit Syrie,
								gewoond in een asielzoekerscentra) met zijn kunst om bruggen te
								slaan tussen organisaties en burgers. Hij is opgegroeid in een
								achtergestelde buurt bij zijn moeder (gescheiden ouders) daar
								leerde hij veel over bevolkingsgroepen en sociaal culturele
								gewoontes. Dit komt terug in zijn werk, hij is een veelzijdige
								kunstenaar, schrijver, een woordkunstenaar en een
								verhalenverteller.
							</p>
						</div>
					</li>
				</ul>

				<div>
					<p>
						Aan het einde van de KIR workshop(s) worden enquêtes afgenomen bij
						zowel leerlingen als workshopleiders om te weten wat er onder de
						jongeren speelt. Deze enquêtes zijn opgesteld door een Criminologe
						Shanna Mehlbaum die betrokken was bij de inzet van KIR op de
						Arnhemse Scholen. Ook kunnen we ophalen aan welke inzet op deze
						thema nog meer behoefte is. Dit onderzoek doen wij om dieper zicht
						te krijgen in hun bezigheden en problematiek om mogelijke
						na-trajecten te verzorgen. Iedere workshop duurt 1-1,5 uur,
						afhankelijk van de doelgroep (denk aan niveau, ouders of
						leerlingen). De workshopgevers hebben verschillende lokalen en
						materialen nodig, denk aan handenarbeidlokaal, sportzaal, digibord,
						eigen laptop. Hierover wordt van te voren gecommuniceerd en
						afspraken gemaakt.
					</p>
				</div>
			</div>
		</Layout>
	);
};

export default WorkhopsPage;

export const Head: HeadFC = () => (
	<Seo title='Workshops' pathname='/workshops/' />
);
