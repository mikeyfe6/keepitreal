import * as React from "react";

import { HeadFC, PageProps, Link } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";

import { Seo } from "../components/seo";

import * as workshopStyles from "../styles/modules/pages/workshops.module.scss";

// TODO: alle SEO beschrijvingen fixen voor alle pagina's

const WorkshopsPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <div className={workshopStyles.workshops} id="workshops">
                <div>
                    <h1>Workshopaanbod voor professionals</h1>
                </div>

                <div className={workshopStyles.introduction}>
                    <div>
                        <h2>INTRODUCTIE</h2>
                        <p>
                            Keep It Real reikt jongeren tools en inzichten aan voor het maken van de juiste keuzes in
                            hun leven. Dat doen we aan de hand van workshops op het gebied van kunst, cultuur en
                            identiteitsontwikkeling, puttend uit onze ervaringsdeskundigheid en pedagogische kennis. De
                            workshopleiders hebben zelf hun sporen verdiend op het gebied van o.a. kunst, ondernemen,
                            muziek, social media en maken thema's bespreekbaar als mental health, oorzaak - gevolg,
                            weerbaarheid.
                        </p>

                        <p>
                            Omdat wij steeds vaker de vraag kregen om onze kennis en ervaring met professionals te
                            delen, hebben we hier een aanbod op ontwikkeld. Per workshop vindt u in dit document een
                            toelichting. We stemmen de workshops altijd af op de specifieke vraag van het team. Het is
                            ook mogelijk om een dagdeel vullend programma op maat samen te stellen: een team take over.
                            We dompelen het team onder in de jongerenwereld, met momenten voor zelfreflectie en een
                            stevige teambuilding component. In de voorbereiding kiezen we samen de programma onderdelen
                            die het beste aansluiten bij uw vraag. Deze dag beleef je vanuit het perspectief van
                            jongeren, waardoor je meer te weten komt over wat er speelt onder jongeren, waar zij tegen
                            aanlopen en over relevante maatschappelijke ontwikkelingen.
                        </p>
                    </div>

                    <div className={workshopStyles.visuals}>
                        <StaticImage src="../images/workshops/2.jpg" alt="" className={workshopStyles.imgOne} />

                        <StaticImage src="../images/workshops/5.jpg" alt="" className={workshopStyles.imgTwo} />

                        <StaticImage src="../images/workshops/3.jpg" alt="" className={workshopStyles.imgThree} />

                        <StaticImage src="../images/workshops/8.jpg" alt="" className={workshopStyles.imgFour} />

                        <StaticImage src="../images/workshops/6.jpg" alt="" className={workshopStyles.imgFive} />

                        <StaticImage src="../images/workshops/7.jpg" alt="" className={workshopStyles.imgSix} />

                        <StaticImage src="../images/workshops/4.jpg" alt="" className={workshopStyles.imgSeven} />
                    </div>
                </div>

                <hr />

                <div className={workshopStyles.codeswitching} id="codeswitching">
                    <div>
                        <h2>CODE SWITCHING</h2>
                        <p>
                            In uiteenlopende sociale contexten gelden verschillende normen, gedragingen en vormen van
                            taalgebruik. Jongeren bewegen zich dagelijks tussen deze werelden, op straat, thuis, op
                            school en in werksituaties, en passen zich voortdurend aan. Dit voortdurende schakelen
                            vraagt veel van hun sociale en cognitieve vaardigheden. Het is daarom essentieel dat
                            professionals die met jongeren werken zich bewust zijn van dit proces en inzicht hebben in
                            de verschillende ‘codes’ die jongeren hanteren.
                        </p>
                        <p>
                            Tijdens deze workshop krijgen deelnemers inzicht in de opkomst en ontwikkeling van de
                            dynamische straatcultuur en de invloed daarvan op hedendaagse straatcodes. We verkennen wat
                            deze codes betekenen in het dagelijks leven van jongeren en hoe professionals hier effectief
                            op kunnen aansluiten.
                        </p>
                        <p>
                            <b>
                                Duur workshop: 2 uur <br />
                                Max aantal deelnemers: 15
                            </b>
                        </p>
                    </div>

                    <div className={workshopStyles.visuals}>
                        <StaticImage src="../images/workshops/9.jpg" alt="" className={workshopStyles.imgOne} />

                        <StaticImage src="../images/workshops/10.jpg" alt="" className={workshopStyles.imgTwo} />

                        <StaticImage src="../images/workshops/11.jpg" alt="" className={workshopStyles.imgThree} />
                    </div>
                </div>

                <hr />

                <div className={workshopStyles.teambuilding} id="teambuilding">
                    <div className={workshopStyles.visualOne}>
                        <StaticImage src="../images/workshops/13.jpg" alt="" className={workshopStyles.imgOne} />
                    </div>
                    <div>
                        <h2>TEAM BUILDING X GENGE ART</h2>
                        <p>
                            Onder begeleiding van kunstenaar Genge gaat het team op een creatieve en inspirerende manier
                            aan de slag met schilderkunst. In deze sessie staan samenwerking, creatief denken en
                            probleemoplossend vermogen centraal. Deelnemers worden uitgedaagd om buiten hun vaste
                            patronen te treden en gezamenlijk tot een krachtig eindresultaat te komen.
                        </p>

                        <p>
                            De workshop wordt verrijkt met het persoonlijke en inspirerende verhaal van de kunstenaar,
                            wat zorgt voor nieuwe inzichten en verbinding binnen het team. Aan het einde van de sessie
                            gaan deelnemers niet alleen naar huis met unieke kunstwerken, maar ook met waardevolle
                            ervaringen die bijdragen aan de teamdynamiek.
                        </p>

                        <p>
                            Op verzoek kan de teambuilding worden verdiept met inhoudelijke thema’s, waarbij de
                            symboliek in de kunst wordt ingezet om specifieke vraagstukken of doelen te verkennen.
                        </p>

                        <p>
                            <b>
                                Duur: 2 uur <br />
                                Max aantal deelnemers: 15
                            </b>
                        </p>
                    </div>
                    <div className={workshopStyles.visualTwo}>
                        <StaticImage src="../images/workshops/12.jpg" alt="" className={workshopStyles.imgTwo} />
                    </div>
                </div>

                <hr />

                <div className={workshopStyles.knowyourself} id="kenjezelf">
                    <div>
                        <h2>KEN JEZELF</h2>
                        <p>
                            Een interactieve en verdiepende workshop, voortgekomen uit onze meidenwerkreeks, met als
                            focus identiteitsontwikkeling bij jongeren en (jong)volwassenen. In deze sessie gaan
                            deelnemers op een toegankelijke en veilige manier aan de slag met vragen als:{" "}
                            <em>Wie ben ik? Wat heeft mij gevormd? En welke waarden zijn voor mij belangrijk?</em>
                        </p>
                        <p>
                            Aan de hand van speelse en activerende werkvormen, reflectie in kleine groepen en
                            gezamenlijke gesprekken worden deelnemers uitgenodigd om hun zelfbeeld te verkennen en te
                            verdiepen. Er ontstaat ruimte om ervaringen te delen, verschillende perspectieven te
                            ontdekken en onderlinge verbinding te versterken.
                        </p>
                        <p>
                            <b>De workshop biedt:</b>
                        </p>
                        <ul>
                            <li>Vergroting van bewustzijn rondom persoonlijke identiteit</li>
                            <li>Ruimte voor zelfreflectie en betekenisvolle uitwisseling</li>
                            <li>Actieve werkvormen die aansluiten bij de leefwereld van jongeren</li>
                            <li>Een sterke balans tussen denken, voelen en doen</li>
                        </ul>
                        <p>
                            <b>
                                Duur: 3 uur <br />
                                Max aantal deelnemers: 15
                            </b>
                        </p>
                    </div>
                    <div className={workshopStyles.visuals}>
                        <StaticImage src="../images/workshops/14.jpg" alt="" className={workshopStyles.imgOne} />

                        <StaticImage src="../images/workshops/15.jpg" alt="" className={workshopStyles.imgTwo} />

                        <StaticImage src="../images/workshops/16.jpg" alt="" className={workshopStyles.imgThree} />
                    </div>
                </div>

                <hr />

                <div className={workshopStyles.streetcodes} id="straatcodes">
                    <div className={workshopStyles.visualOne}>
                        <StaticImage src="../images/workshops/18.jpg" alt="" className={workshopStyles.imgOne} />
                    </div>
                    <div>
                        <h2>STRAATCODES</h2>
                        <p>
                            Een verdiepende en praktijkgerichte workshop voor professionals die werken met jongeren,
                            leefbaarheid en veiligheid. In deze sessie nemen we deelnemers mee in de dynamiek van
                            straatcultuur en de onderliggende structuren binnen wijken. Want wie de wijk begrijpt,
                            begrijpt het speelveld waarin hij of zij opereert.
                        </p>
                        <p>
                            We ontrafelen hoe straatcultuur werkt en wat dit betekent voor gedrag, onderlinge
                            verhoudingen en interacties met professionals. Daarbij leggen we de focus op het herkennen
                            van patronen, het duiden van gedrag en het versterken van de aansluiting bij jongeren en hun
                            leefwereld.
                        </p>
                        <p>
                            <b>Onderwerpen die aan bod komen:</b>
                        </p>
                        <ul>
                            <li>De achterliggende redenen van ‘probleemgedrag’ op straat</li>
                            <li>Informele hiërarchieën: wie heeft daadwerkelijk invloed?</li>
                            <li>Waar en hoe risico’s ontstaan binnen de wijk</li>
                            <li>Effectiever communiceren en beter aansluiten in gesprekken</li>
                            <li>Werken mét de wijk in plaats van ertegen</li>
                        </ul>
                        <p>
                            Deze interactieve workshop combineert theorie met herkenbare praktijkvoorbeelden en biedt
                            volop ruimte om in te gaan op vragen en casuïstiek vanuit de groep.
                        </p>
                        <p>
                            <b>
                                Duur: 2 uur <br />
                                Max aantal deelnemers: 15
                            </b>
                        </p>
                    </div>

                    <div className={workshopStyles.visualTwo}>
                        <StaticImage src="../images/workshops/17.jpg" alt="" className={workshopStyles.imgTwo} />
                        <StaticImage src="../images/workshops/19.jpg" alt="" className={workshopStyles.imgThree} />
                    </div>
                </div>

                <hr />

                <div className={workshopStyles.betweenstreetandme} id="tussen-de-straat-en-ik">
                    {/* <div className={workshopStyles.visualOne}>
                        <StaticImage src="../images/workshops/18.jpg" alt="" className={workshopStyles.imgOne} />
                    </div> */}
                    <div>
                        <h2>TUSSEN DE STRAAT EN IK</h2>
                        <p>
                            Tussen de stoeptegels van de straat bevinden zich verschillende werelden waarin jongeren
                            zich dagelijks bewegen en soms ook in kunnen verdwalen. De straat is niet één geheel, maar
                            een dynamische omgeving waarin straatcultuur en popcultuur continu samenkomen en elkaar
                            beïnvloeden. Juist daarom is het belangrijk om te herkennen met welke wereld we te maken
                            hebben en wat dit betekent voor het gedrag van jongeren.
                        </p>
                        <p>
                            In deze workshop maken we kennis met deze verschillende werelden en hoe jongeren hiertussen
                            schakelen. We staan stil bij het verschil tussen straatcultuur, wat er daadwerkelijk speelt
                            op straat en binnen groepen en popcultuur, die gevormd wordt door social media, muziek en
                            trends. Deze invloeden zorgen ervoor dat normen, gedrag en taalgebruik zich snel ontwikkelen
                            en voortdurend veranderen.
                        </p>
                        <p>
                            We gaan in op hoe deze werelden van elkaar te onderscheiden zijn en waarom dit belangrijk is
                            in het werken met jongeren. Wanneer je deze verschillen begrijpt, kun je gedrag beter
                            plaatsen, signalen eerder herkennen en bewuster handelen. Niet alles wat zichtbaar is, is
                            onschuldig, en niet alles wat zorgelijk lijkt, is direct problematisch.
                        </p>
                        <p>
                            Daarnaast behandelen we het verschil tussen status en reputatie binnen deze werelden. Status
                            gaat over de positie die iemand op dat moment inneemt binnen een groep, terwijl reputatie
                            wordt opgebouwd over tijd en bepaalt hoe iemand bekendstaat. We onderzoeken hoe deze
                            factoren invloed hebben op keuzes, gedrag en groepsdynamiek.
                        </p>
                        <p>
                            Tijdens de workshop gaan deelnemers actief aan de slag met praktijkvoorbeelden en herkenbare
                            situaties. We sluiten af met het herkennen van signalen binnen de straatcultuur en hoe
                            professionals hier effectief op kunnen inspelen in hun dagelijkse werk.
                        </p>
                        <p>
                            <b>
                                Duur: 2 uur <br />
                                Max aantal deelnemers: 15
                            </b>
                        </p>
                    </div>

                    {/* <div className={workshopStyles.visualTwo}>
                        <StaticImage src="../images/workshops/17.jpg" alt="" className={workshopStyles.imgTwo} />
                        <StaticImage src="../images/workshops/19.jpg" alt="" className={workshopStyles.imgThree} />
                    </div> */}
                </div>

                <hr />

                <div>
                    <p>
                        Voor meer informatie of het aanvragen van een offerte, stuur ons een bericht via het{" "}
                        <Link to="/contact/">online contactformulier</Link> of mail naar{" "}
                        <a href="mailto:secretariaat@keeptreal.nl">secretariaat@keeptreal.nl</a>
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default WorkshopsPage;

export const Head: HeadFC = () => (
    <Seo
        title="Workshops"
        pathname="/workshops/"
        description="Keep It Real biedt workshops voor professionals die met jongeren werken. Met focus op kunst, cultuur en straatcodes geven we inzicht in de leefwereld van jongeren."
    />
);
