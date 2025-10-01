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
                    <h2>Workshopaanbod voor professionals</h2>
                </div>

                <div className={workshopStyles.introduction}>
                    <div>
                        <h3>INTRODUCTIE</h3>
                        <p>
                            Keep It Real reikt jongeren tools en inzichten aan
                            voor het maken van de juiste keuzes in hun leven.
                            Dat doen we aan de hand van workshops op het gebied
                            van kunst, cultuur en identiteitsontwikkeling,
                            puttend uit onze ervaringsdeskundigheid en
                            pedagogische kennis. De workshopleiders hebben zelf
                            hun sporen verdiend op het gebied van o.a. kunst,
                            ondernemen, muziek, social media en maken thema's
                            bespreekbaar als mental health, oorzaak - gevolg,
                            weerbaarheid.
                        </p>

                        <p>
                            Omdat wij steeds vaker de vraag kregen om onze
                            kennis en ervaring met professionals te delen,
                            hebben we hier een aanbod op ontwikkeld. Per
                            workshop vindt u in dit document een toelichting. We
                            stemmen de workshops altijd af op de specifieke
                            vraag van het team. Het is ook mogelijk om een
                            dagdeel vullend programma op maat samen te stellen:
                            een team take over. We dompelen het team onder in de
                            jongerenwereld, met momenten voor zelfreflectie en
                            een stevige teambuilding component. In de
                            voorbereiding kiezen we samen de programma
                            onderdelen die het beste aansluiten bij uw vraag.
                            Deze dag beleef je vanuit het perspectief van
                            jongeren, waardoor je meer te weten komt over wat er
                            speelt onder jongeren, waar zij tegen aanlopen en
                            over relevante maatschappelijke ontwikkelingen.
                        </p>
                    </div>

                    <div className={workshopStyles.visuals}>
                        <StaticImage
                            src="../images/workshops/2.jpg"
                            alt=""
                            className={workshopStyles.imgOne}
                        />

                        <StaticImage
                            src="../images/workshops/5.jpg"
                            alt=""
                            className={workshopStyles.imgTwo}
                        />

                        <StaticImage
                            src="../images/workshops/3.jpg"
                            alt=""
                            className={workshopStyles.imgThree}
                        />

                        <StaticImage
                            src="../images/workshops/8.jpg"
                            alt=""
                            className={workshopStyles.imgFour}
                        />

                        <StaticImage
                            src="../images/workshops/6.jpg"
                            alt=""
                            className={workshopStyles.imgFive}
                        />

                        <StaticImage
                            src="../images/workshops/7.jpg"
                            alt=""
                            className={workshopStyles.imgSix}
                        />

                        <StaticImage
                            src="../images/workshops/4.jpg"
                            alt=""
                            className={workshopStyles.imgSeven}
                        />
                    </div>
                </div>

                <hr />

                <div className={workshopStyles.codeswitching}>
                    <div>
                        <h3>CODE SWITCHING</h3>
                        <p>
                            In verschillende contexten gelden verschillende
                            codes. Jongeren gebruiken verschillende woorden,
                            gedragingen en andere uitingen op straat / onder
                            vrienden, thuis en op school of in een werksetting.
                            Het vraagt ontzettend veel van jongeren om zich
                            steeds aan te passen naar de omgeving waarin zij
                            zich bevinden. Het helpt als professionals die met
                            jongeren werken zich hier bewust van zijn en zelf
                            ook een zekere kennis hebben van de codes die
                            jongeren in andere settingen gebruiken.
                        </p>
                        <p>
                            In deze workshop nemen we de deelnemers mee in de
                            opkomst en ontwikkeling van de snel veranderende
                            straatcultuur en wat dit betekent voor de
                            straatcodes die jongeren in het hier en nu
                            gebruiken.
                        </p>
                        <p>
                            <b>
                                Duur workshop: 2 uur <br />
                                Max aantal deelnemers: 15
                            </b>
                        </p>
                    </div>

                    <div className={workshopStyles.visuals}>
                        <StaticImage
                            src="../images/workshops/9.jpg"
                            alt=""
                            className={workshopStyles.imgOne}
                        />

                        <StaticImage
                            src="../images/workshops/10.jpg"
                            alt=""
                            className={workshopStyles.imgTwo}
                        />

                        <StaticImage
                            src="../images/workshops/11.jpg"
                            alt=""
                            className={workshopStyles.imgThree}
                        />
                    </div>
                </div>

                <hr />

                <div className={workshopStyles.teambuilding}>
                    <div className={workshopStyles.visualOne}>
                        <StaticImage
                            src="../images/workshops/13.jpg"
                            alt=""
                            className={workshopStyles.imgOne}
                        />
                    </div>
                    <div>
                        <h3>TEAM BUILDING X GENGE ART</h3>
                        <p>
                            Het team gaat onder leiding van kunstenaar Genge op
                            een unieke en verrassende manier aan de slag met
                            schilderkunst. Er wordt een beroep gedaan op
                            samenwerkend en oplossend vermogen van de
                            deelnemers. Na afloop van de sessie gaan de
                            deelnemers naar huis met een aantal prachtige
                            schilderijen en inzichten uit het inspirerende
                            verhaal van de kunstenaar.
                        </p>

                        <p>
                            We kunnen de teambuilding op verzoek verrijken met
                            een vleugje inhoud naar keuze door te spelen met de
                            symboliek van de kunst.
                        </p>

                        <p>
                            <b>
                                Duur: 2 uur <br />
                                Max aantal deelnemers: 15
                            </b>
                        </p>
                    </div>
                    <div className={workshopStyles.visualTwo}>
                        <StaticImage
                            src="../images/workshops/12.jpg"
                            alt=""
                            className={workshopStyles.imgTwo}
                        />
                    </div>
                </div>

                <hr />

                <div className={workshopStyles.knowyourself}>
                    <div>
                        <h3>KEN JEZELF</h3>
                        <p>
                            Een interactieve en verdiepende sessie gebaseerd op
                            onze meidenwerk reeks, gericht op
                            identiteitsontwikkeling van jongeren en
                            (jong)volwassenen. In deze workshop gaan deelnemers
                            op een laagdrempelige manier aan de slag met vragen
                            rondom wie ze zijn, wat hen gevormd heeft en welke
                            waarden voor hen belangrijk zijn.
                        </p>
                        <p>
                            Door middel van speelse werkvormen, reflectie in
                            kleine groepen en gezamenlijke gesprekken, creëren
                            we een veilige setting waarin deelnemers hun
                            zelfbeeld verkennen en leren van elkaars
                            perspectieven. De workshop biedt:
                        </p>
                        <ul>
                            <li>Bewustwording van persoonlijke identiteit;</li>
                            <li>
                                Ruimte voor zelfreflectie en onderlinge
                                verbinding;
                            </li>
                            <li>
                                Actieve werkvormen die aansluiten bij de
                                belevingswereld van jongeren;
                            </li>
                            <li>Een balans tussen denken, voelen en doen.</li>
                        </ul>
                        <p>
                            <b>
                                Duur: 3 uur <br />
                                Max aantal deelnemers: 15
                            </b>
                        </p>
                    </div>
                    <div className={workshopStyles.visuals}>
                        <StaticImage
                            src="../images/workshops/14.jpg"
                            alt=""
                            className={workshopStyles.imgOne}
                        />

                        <StaticImage
                            src="../images/workshops/15.jpg"
                            alt=""
                            className={workshopStyles.imgTwo}
                        />

                        <StaticImage
                            src="../images/workshops/16.jpg"
                            alt=""
                            className={workshopStyles.imgThree}
                        />
                    </div>
                </div>

                <hr />

                <div className={workshopStyles.streetcodes}>
                    <div className={workshopStyles.visualOne}>
                        <StaticImage
                            src="../images/workshops/18.jpg"
                            alt=""
                            className={workshopStyles.imgOne}
                        />
                    </div>
                    <div>
                        <h3>STRAATCODES</h3>
                        <p>
                            Een deep dive in straatcultuur, relevant voor
                            iedereen die zich bezighoudt met jeugd en
                            veiligheid. We ontleden straatcultuur en verdiepen
                            ons in wijkdynamiek. Wijkdynamiek begrijpen, is
                            weten in welk spel je stapt. Aan bod komen:
                        </p>
                        <ul>
                            <li>redenen achter ‘probleemgedrag’ op straat;</li>
                            <li>
                                informele hiërarchie: wie heeft écht invloed;
                            </li>
                            <li>waar ontstaan risico's; </li>
                            <li>betere aansluiting in gesprekken;</li>
                            <li>niet tegen, maar mét de wijk werken.</li>
                        </ul>
                        <p>
                            Een informatieve workshop waarin we de theorie
                            illustreren aan de hand van voorbeelden en ingaan op
                            specifieke vragen of casuïstiek vanuit de groep.
                        </p>
                        <p>
                            <b>
                                Duur: 2 uur <br />
                                Max aantal deelnemers: 15
                            </b>
                        </p>
                    </div>

                    <div className={workshopStyles.visualTwo}>
                        <StaticImage
                            src="../images/workshops/17.jpg"
                            alt=""
                            className={workshopStyles.imgTwo}
                        />
                        <StaticImage
                            src="../images/workshops/19.jpg"
                            alt=""
                            className={workshopStyles.imgThree}
                        />
                    </div>
                </div>

                <hr />

                <div>
                    <p>
                        Voor meer informatie of het aanvragen van een offerte,
                        stuur ons een bericht via het{" "}
                        <Link to="/contact/">online contactformulier</Link> of
                        mail naar{" "}
                        <a href="mailto:secretariaat@keeptreal.nl">
                            secretariaat@keeptreal.nl
                        </a>
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
