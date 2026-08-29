import React, { useEffect, useState } from "react";

import { useLocation } from "@reach/router";

import type { HeadFC, PageProps } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";

import { Seo } from "../../components/seo";

import * as workshopStyles from "../../styles/modules/pages/workshops-scholen.module.scss";

const WorkshopsSchoolsPage: React.FC<PageProps> = () => {
    const [activeSection, setActiveSection] = useState("");
    const { hash } = useLocation();

    useEffect(() => {
        setActiveSection(hash);
    }, [hash]);

    return (
        <Layout>
            <div className={workshopStyles.workshops} id="workshops">
                <div>
                    <h1>Workshopaanbod voor scholen</h1>
                </div>

                <div className={workshopStyles.intro}>
                    <div>
                        <h2>Introductie</h2>
                        <p>
                            Keep It Real reikt jongeren tools en inzichten aan om bewuste keuzes te maken, weerbaarder
                            te worden en sterker in het leven te staan. Dit doen we met interactieve workshops op het
                            gebied van kunst, cultuur en identiteitsontwikkeling, waarbij we onze ervaringsdeskundigheid
                            en pedagogische kennis combineren.
                        </p>

                        <p>
                            Onze workshopleiders zijn professionals met expertise binnen onder andere kunst, cultuur en
                            jongerenwerk. Zij brengen ieder hun eigen expertise en praktijkervaring mee en blijven zich
                            continu ontwikkelen in hun vakgebied en pedagogische vaardigheden. Vanuit die verschillende
                            perspectieven maken zij thema’s bespreekbaar die dicht bij de leefwereld van jongeren
                            liggen, zoals mentale gezondheid, oorzaak & gevolg, identiteit en weerbaarheid.
                        </p>

                        <p>
                            Onze workshops sluiten aan bij de belevingswereld van jongeren en bieden ruimte voor
                            herkenning, gesprek, bewustwording en persoonlijke ontwikkeling.
                        </p>
                        <p className={workshopStyles.workshopsOffersDesktop}>
                            <b>Bekijk hieronder ons aanbod voor scholen:</b>
                        </p>
                    </div>

                    <div className={workshopStyles.visuals}>
                        <StaticImage src="../../images/workshops/2.jpg" alt="" className={workshopStyles.imgOne} />

                        <StaticImage src="../../images/workshops/5.jpg" alt="" className={workshopStyles.imgTwo} />

                        <StaticImage src="../../images/workshops/3.jpg" alt="" className={workshopStyles.imgThree} />

                        <StaticImage src="../../images/workshops/8.jpg" alt="" className={workshopStyles.imgFour} />

                        <StaticImage src="../../images/workshops/6.jpg" alt="" className={workshopStyles.imgFive} />

                        <StaticImage src="../../images/workshops/7.jpg" alt="" className={workshopStyles.imgSix} />

                        <StaticImage src="../../images/workshops/4.jpg" alt="" className={workshopStyles.imgSeven} />
                    </div>

                    <p className={workshopStyles.workshopsOffersMobile}>
                        <b>Bekijk hieronder ons aanbod voor scholen:</b>
                    </p>
                </div>

                <hr />

                <ul>
                    <li id="fashion" className={activeSection === "#fashion" ? workshopStyles.active : ""}>
                        <div className={workshopStyles.workshopsContent}>
                            <h2>Workshop ‘Fashion & Identiteit’</h2>
                            <p className={workshopStyles.workshopsSubtitle}>
                                Mode is meer dan kleding: het is een manier om te laten zien wie je bent.
                            </p>
                            <p>
                                Tijdens deze workshop ontdekken jongeren de verbinding tussen fashion, identiteit en
                                zelfexpressie. Met styling, moodboards en een eigen kledingconcept denken zij na over
                                hun stijl, persoonlijkheid en uitstraling.
                            </p>
                            <p>Jongeren leren:</p>
                            <ul>
                                <li>Hun eigen stijl en identiteit ontdekken;</li>
                                <li>Zich creatief uiten;</li>
                                <li>Bewuste keuzes maken rondom trends en social media;</li>
                                <li>Creatief denken en ontwerpen;</li>
                                <li>Samenwerken en presenteren.</li>
                            </ul>

                            <p className={workshopStyles.workshopsClosing}>
                                <b>De boodschap:</b> jouw stijl is een vorm van zelfexpressie. Ontdek wat bij jou past
                                en durf dat te laten zien.
                            </p>
                        </div>
                    </li>
                    <li id="wiebenik" className={activeSection === "#wiebenik" ? workshopStyles.active : ""}>
                        <div className={workshopStyles.workshopsContent}>
                            <h2>Workshop ‘Identiteit – Wie ben ik?’</h2>
                            <p className={workshopStyles.workshopsSubtitle}>
                                Wie ben ik, waar ben ik goed in en wat maakt mij uniek?
                            </p>
                            <p>
                                Tijdens deze workshop ontdekken kinderen op een leuke en veilige manier meer over
                                zichzelf. Met creatieve opdrachten, spelletjes en gesprekken staan we stil bij
                                kwaliteiten, gevoelens, zelfvertrouwen, grenzen en de invloed van anderen.
                            </p>
                            <p>Jongeren leren:</p>
                            <ul>
                                <li>Hun kwaliteiten en sterke kanten herkennen;</li>
                                <li>Werken aan zelfvertrouwen;</li>
                                <li>Gevoelens en grenzen aangeven;</li>
                                <li>Omgaan met verschillen en groepsdruk;</li>
                                <li>Keuzes maken die bij hen passen.</li>
                            </ul>

                            <p className={workshopStyles.workshopsClosing}>
                                <b>De boodschap:</b> je hoeft niet hetzelfde te zijn als een ander om erbij te horen.
                            </p>
                        </div>
                    </li>
                    <li id="kunst" className={activeSection === "#kunst" ? workshopStyles.active : ""}>
                        <div className={workshopStyles.workshopsContent}>
                            <h2>Workshop ‘Kunst’</h2>
                            <p className={workshopStyles.workshopsSubtitle}>
                                Kunst biedt ruimte om jezelf te ontdekken, uit te drukken en samen te werken.
                            </p>
                            <p>
                                Tijdens deze workshops gaan jongeren creatief aan de slag met verschillende opdrachten.
                                Door te creëren, samen te werken en soms buiten hun comfortzone te stappen, krijgen zij
                                meer inzicht in hun gevoelens, gedrag en reacties.
                            </p>
                            <p>Jongeren leren:</p>
                            <ul>
                                <li>Hun gevoelens en gedrag herkennen;</li>
                                <li>Reflecteren op zichzelf en hun omgeving;</li>
                                <li>Samenwerken en communiceren;</li>
                                <li>Omgaan met verandering;</li>
                                <li>Bewuster kijken naar hun eigen reacties.</li>
                            </ul>

                            <p className={workshopStyles.workshopsClosing}>
                                <b>De boodschap:</b> door te creëren en te reflecteren, ontdek je meer over jezelf en
                                elkaar.
                            </p>
                        </div>
                    </li>
                    <li id="samensterk" className={activeSection === "#samensterk" ? workshopStyles.active : ""}>
                        <div className={workshopStyles.workshopsContent}>
                            <h2>Workshop ‘Meidenvenijn – Samen sterk’</h2>
                            <p className={workshopStyles.workshopsSubtitle}>
                                Vriendschappen zijn belangrijk, maar kunnen soms ingewikkeld zijn.
                            </p>
                            <p>
                                Tijdens deze interactieve workshop ontdekken meiden meer over vriendschap, groepsgedrag
                                en hun eigen rol binnen een groep. Met spellen, gesprekken en herkenbare situaties
                                oefenen ze met grenzen aangeven, voor zichzelf opkomen en omgaan met conflicten.
                            </p>
                            <p>De meiden leren:</p>
                            <ul>
                                <li>Negatief groepsgedrag herkennen;</li>
                                <li>Voor zichzelf en anderen opkomen;</li>
                                <li>Grenzen aangeven en respecteren;</li>
                                <li>Conflicten en misverstanden bespreken;</li>
                                <li>Positieve vriendschappen opbouwen.</li>
                            </ul>

                            <p className={workshopStyles.workshopsClosing}>
                                <b>De boodschap:</b> samen zorgen we voor een groep waarin iedereen zich gezien, gehoord
                                en welkom voelt.
                            </p>
                        </div>
                    </li>
                    <li id="muziek" className={activeSection === "#muziek" ? workshopStyles.active : ""}>
                        <div className={workshopStyles.workshopsContent}>
                            <h2>Workshop ‘Muziek’</h2>
                            <p className={workshopStyles.workshopsSubtitle}>
                                Muziek geeft jongeren de ruimte om hun verhaal en creativiteit te laten horen.
                            </p>
                            <p>
                                Tijdens deze workshop werken jongeren samen aan een eigen nummer. Van tekst schrijven en
                                beats kiezen of maken tot vocals opnemen en het eindproduct uitwerken: zij doorlopen het
                                volledige creatieve proces.
                            </p>
                            <p>De jongeren leren:</p>
                            <ul>
                                <li>Zich creatief en positief uiten;</li>
                                <li>Samenwerken en communiceren;</li>
                                <li>Werken aan zelfvertrouwen;</li>
                                <li>Muziek en teksten creëren;</li>
                                <li>Hun ideeën omzetten in een eindproduct.</li>
                            </ul>

                            <p className={workshopStyles.workshopsClosing}>
                                <b>De boodschap:</b> jouw verhaal en creativiteit mogen gezien/gehoord worden.
                            </p>
                        </div>
                    </li>
                    <li
                        id="online-weerbaarheid"
                        className={activeSection === "#online-weerbaarheid" ? workshopStyles.active : ""}
                    >
                        <div className={workshopStyles.workshopsContent}>
                            <h2>Workshop ‘Online Weerbaarheid – Slim en sterk online’</h2>
                            <p className={workshopStyles.workshopsSubtitle}>
                                Online zijn is leuk, maar brengt ook uitdagingen met zich mee.
                            </p>
                            <p>
                                Tijdens deze workshop leren kinderen bewuster, veiliger en sterker omgaan met social
                                media, games en andere online omgevingen. We bespreken onder andere groepsdruk, privacy,
                                online pesten, influencers en persoonlijke grenzen.
                            </p>
                            <p>De jongeren leren:</p>
                            <ul>
                                <li>Kritisch kijken naar online content;</li>
                                <li>Bewust omgaan met wat ze delen en plaatsen;</li>
                                <li>Omgaan met online groepsdruk;</li>
                                <li>Hun privacy en grenzen bewaken;</li>
                                <li>Weten wat ze kunnen doen als er online iets misgaat.</li>
                            </ul>

                            <p className={workshopStyles.workshopsClosing}>
                                <b>De boodschap:</b> leer zelf nadenken, maak bewuste keuzes en blijf online dicht bij
                                jezelf.
                            </p>
                        </div>
                    </li>
                    <li
                        id="oorzaak-gevolg"
                        className={activeSection === "#oorzaak-gevolg" ? workshopStyles.active : ""}
                    >
                        <div className={workshopStyles.workshopsContent}>
                            <h2>Workshop ‘Oorzaak & Gevolg’</h2>
                            <p className={workshopStyles.workshopsSubtitle}>
                                Welke invloed hebben mijn keuzes op mijzelf en mijn omgeving?
                            </p>
                            <p>
                                Tijdens deze workshopreeks leren jongeren inzicht krijgen in hun gedrag, keuzes en de
                                gevolgen daarvan. Met herkenbare situaties, sport, beweging en samenwerking oefenen zij
                                met zelfbeheersing, omgaan met spanning, verantwoordelijkheid en bewuste keuzes.
                            </p>
                            <p>De jongeren leren:</p>
                            <ul>
                                <li>Bewuster omgaan met keuzes en gevolgen;</li>
                                <li>Herkennen wat hun gedrag beïnvloedt;</li>
                                <li>Anders reageren in lastige situaties;</li>
                                <li>Omgaan met groepsdruk en spanning;</li>
                                <li>Doelen vertalen naar haalbare stappen.</li>
                            </ul>

                            <p className={workshopStyles.workshopsClosing}>
                                <b>De boodschap:</b> elke keuze heeft een gevolg. Door bewust te kiezen, krijg je meer
                                grip op je gedrag en je toekomst.
                            </p>
                        </div>
                    </li>
                    <li id="oya-talks" className={activeSection === "#oya-talks" ? workshopStyles.active : ""}>
                        <div className={workshopStyles.workshopsContent}>
                            <h2>Workshop ‘Oya Talks’</h2>
                            <p className={workshopStyles.workshopsSubtitle}>
                                Wat speelt er écht in het leven van jongeren?
                            </p>
                            <p>
                                Tijdens ‘Oya Talks’ gaan jongeren met elkaar in gesprek over thema’s die dicht bij hun
                                leefwereld staan. Aan de hand van stellingen en herkenbare situaties bespreken we
                                onderwerpen als liefde, discriminatie, thuissituatie, vriendengroepen, groepsdruk en
                                (on)veilige situaties.
                            </p>
                            <p>
                                Mentale gezondheid staat centraal. Er is ruimte om ervaringen, gevoelens en gedachten te
                                delen en samen stil te staan bij de kwetsbaarheid én kracht van het jongerenleven.
                            </p>
                            <p>De jongeren leren:</p>
                            <ul>
                                <li>Open praten over gevoelens en ervaringen;</li>
                                <li>Herkennen wat invloed heeft op hun mentale welzijn;</li>
                                <li>Omgaan met groepsdruk en moeilijke situaties;</li>
                                <li>Verschillende perspectieven begrijpen;</li>
                                <li>Handvatten vinden voor situaties die zij tegenkomen.</li>
                            </ul>

                            <p className={workshopStyles.workshopsClosing}>
                                <b>De boodschap:</b> je hoeft niet alles alleen te dragen. Door te praten, te luisteren
                                en elkaar te begrijpen, ontstaat er ruimte voor steun en verandering.
                            </p>
                        </div>
                    </li>
                    <li id="sport" className={activeSection === "#sport" ? workshopStyles.active : ""}>
                        <div className={workshopStyles.workshopsContent}>
                            <h2>Workshop ‘Sport’</h2>
                            <p className={workshopStyles.workshopsSubtitle}>Bewegen, samenwerken en jezelf uitdagen.</p>
                            <p>
                                Tijdens de sportworkshop gaan jongeren actief aan de slag met verschillende sport- en
                                bewegingsactiviteiten. Sport wordt ingezet om niet alleen fysiek, maar ook mentaal en
                                sociaal te groeien.
                            </p>
                            <p>
                                Door samen te werken, grenzen te verleggen en uitdagingen aan te gaan, ontdekken
                                deelnemers meer over zichzelf en elkaar.
                            </p>
                            <p>De jongeren leren:</p>
                            <ul>
                                <li> Samenwerken en communiceren;</li>
                                <li>Omgaan met uitdaging en tegenslag;</li>
                                <li>Grenzen herkennen en verleggen;</li>
                                <li>Doorzetten en verantwoordelijkheid nemen;</li>
                                <li>Vertrouwen in zichzelf en anderen.</li>
                            </ul>

                            <p className={workshopStyles.workshopsClosing}>
                                <b>De boodschap:</b> door in beweging te komen, ontdek je wat je kunt en waar je toe in
                                staat bent.
                            </p>
                        </div>
                    </li>
                </ul>
                <div>
                    <p>
                        <b>Aanvullende informatie:</b>{" "}
                    </p>
                    <p>
                        Een workshop duurt 1 tot 1,5 uur, afhankelijk van de doelgroep. Benodigde ruimtes en materialen
                        worden vooraf afgestemd.
                    </p>
                    <p>
                        Na afloop van de workshops verzamelen we via korte enquêtes input van leerlingen en
                        workshopleiders. Zo krijgen we inzicht in wat er onder jongeren speelt en waar behoefte is aan
                        eventuele vervolgtrajecten. De enquêtes zijn opgesteld door criminoloog Shanna Mehlbaum, die
                        betrokken is bij de inzet van KIR op Arnhemse scholen.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default WorkshopsSchoolsPage;

export const Head: HeadFC = () => (
    <Seo
        title="Workshopaanbod voor scholen"
        pathname="/workshops/aanbod-scholen/"
        description="Keep It Real biedt workshops voor scholen. Met focus op kunst, cultuur en straatcodes geven we inzicht in de leefwereld van jongeren."
    />
);
