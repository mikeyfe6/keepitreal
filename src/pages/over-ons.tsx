import * as React from "react";

import type { HeadFC, PageProps } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Layout from "../components/layout";

import { Seo } from "../components/seo";

import * as aboutStyles from "../styles/modules/pages/about.module.scss";

const AboutUsPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <div className={aboutStyles.about}>
                <div>
                    <h1>Over Keep It Real</h1>
                    <p>
                        Het KIR programma is een initiatief van cultureel
                        professional Wenner Regales, geboren op Curaçao en zelf
                        grotendeels opgegroeid in Amsterdam, heeft door zijn
                        jarenlange ervaring door het werken met jongeren een
                        enorm netwerk gecreëerd met professionals, die ook
                        vanuit hun eigen ervaring iets kunnen bijdragen aan de
                        positieve ontwikkeling van onze jeugd. Een aantal van de
                        professionals waar hij mee werkt, heeft hij nu bij
                        elkaar gebracht om het project KIR op te starten. KIR is
                        gestart als een ééndaags programma op het Maarten van
                        Rossem (VMBO) en Leerpark Presikhaaf (VMBO en praktijk
                        onderwijs) in Arnhem en het OCZO, de Dreef en OSB in
                        Amsterdam.
                    </p>

                    <p>
                        De vraag was om een dag/ochtend te organiseren waarbij
                        de leerlingen geen “les” maar een echte “experience”
                        binnen het thema veiligheid. Het team van
                        ervaringsdeskundigen informeerden en motiveerden de
                        leerlingen om positieve keuzes in het leven te maken en
                        kansen te grijpen. Deze dagen werden zowel door de
                        jongeren als hun docenten en de ketenpartners als zeer
                        positief ervaren. Kinderen vertelden de teamleden over
                        dingen die zich afspeelden op school waar de docenten
                        niks van wisten, luisterden ademloos naar de verhalen
                        van de teamleden. De scholen kregen nieuwe inzichten
                        over de benadering van leerlingen en zagen dat hun
                        leerlingen intrinsiek geïnteresseerd waren in wat de
                        teamleden te vertellen, hen te leren hadden. Het werd al
                        gauw duidelijk dat de aanpak de potentie had om impact
                        te maken, mits het een duurzaam en ingebed programma
                        betrof.
                    </p>

                    <p>
                        KIR is zich sindsdien aan het ontwikkelen tot een
                        lessenreeks, bestaande uit startdagen, workshops,
                        individuele coaching en groepsactiviteiten voor jongens
                        en meiden en ouders. Iedere persoon die een onderdeel
                        verzorgt in het programma, is een ervaringsdeskundige.
                        De inzet van ervaringsdeskundigen stoelt op een aantal
                        begeleidingsmechanismen die in reguliere
                        begeleidingsvormen niet, minder of anders aanwezig zijn.
                    </p>
                </div>

                <div>
                    <h3 className={aboutStyles.showOnMobile}>
                        Mechanisme
                        <span>Belangrijke elementen</span>
                    </h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Mechanisme</th>
                                <th>Belangrijke elementen</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <FontAwesomeIcon
                                        icon={"hand-holding-hand"}
                                        size="xl"
                                    />{" "}
                                    Empathie en acceptatie
                                </td>
                                <td>
                                    De ervaringsdeskundige veroordeelt niet,
                                    bejegent de leerling positief, is niet
                                    gericht op de waarheid, ziet de leerling als
                                    gelijke
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon
                                        icon={"people-arrows"}
                                        size="xl"
                                    />{" "}
                                    Sociaal leren
                                </td>
                                <td>
                                    De leerling kan leren om nee te zeggen,
                                    weerstand te ontwikkelen tegen negatieve
                                    beeldvorming en stigma
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon
                                        icon={"handshake"}
                                        size="xl"
                                    />{" "}
                                    Sociale verbinding
                                </td>
                                <td>
                                    Vertrouwensrelatie die bijdraagt aan
                                    negatieve beeldvorming over voorgaande
                                    interacties met volwassenen
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={"users"} size="xl" />{" "}
                                    Sociale controle
                                </td>
                                <td>
                                    De ervaringsdeskundige doorziet sneller
                                    motieven, kan makkelijker corrigeren of
                                    kritische vragen stellen zonder veroordelend
                                    over te komen
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon
                                        icon={"person-chalkboard"}
                                        size="xl"
                                    />{" "}
                                    Verhaal en identiteitsvorming
                                </td>
                                <td>
                                    De leerling kan het eigen verleden omarmen,
                                    een volledig beeld van zichzelf vormen en
                                    het gevoel van eigenaarschap ontwikkelen
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon
                                        icon={"users-viewfinder"}
                                        size="xl"
                                    />{" "}
                                    Hoop en perspectief
                                </td>
                                <td>
                                    De ervaringsdeskundige biedt hoop, laat de
                                    mogelijkheid zien van een alternatieve
                                    toekomst
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon
                                        icon={"language"}
                                        size="xl"
                                    />{" "}
                                    Vertaling en verbinding
                                </td>
                                <td>
                                    De ervaringsdeskundige kan de verbinding
                                    leggen tussen de leerling en formele vormen
                                    van hulp en kan als vertaler dienen tussen
                                    die twee werelden
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <p>
                        De workshopleiders hebben het straatleven,
                        criminaliteit, drugsgebruik en armoede gekend,
                        discriminatie ervaren of in de gevangenis gezeten.
                        Vanwege hun track-record op de straat hebben ze het
                        respect van de jongeren en kunnen “de taal van de
                        jongere spreken”. Inmiddels heeft ieder teamlid een
                        eigen bedrijf als atleet of artiest en samen vormen ze
                        een creatief innovatief team met een verhaal, zowel
                        inspirerend voor jongeren als voor volwassenen. Vanwege
                        de ommezwaai die ze in hun eigen leven gemaakt hebben,
                        dienen zij als positieve rolmodellen: het bewijs dat een
                        goed leven mogelijk is, ook al kom je van de straat.
                    </p>

                    <p>
                        De positieve rolmodellen van KIR drukken die kinderen op
                        het hart dat ze juist géén pussy zijn als ze nee zeggen.
                        Ze doen dit, op een voor de jongere, geloofwaardige en
                        verbindende manier. Vanwege hun eigen achtergrond
                        begrijpen zij de verleidingen waar de jongeren mee te
                        maken hebben: ze veroordelen niet en ze schrikken ook
                        niet snel van de soms heftige ervaringen die deze jonge
                        mensen al hebben opgedaan. Hierdoor voelen jongeren de
                        vrijheid om open en eerlijk te zijn.
                    </p>

                    <p>
                        De impact van KIR is groot: jongeren voelen zich gezien
                        en gehoord en kunnen terecht bij mensen die hun eigen
                        wereld snappen. De leerlingen geven blijk van een enorme
                        waardering van het programma: zij stellen zich kwetsbaar
                        op en zijn open over de uitdagingen die de straat met
                        zich meebrengt. Scholen krijgen toegang tot signalen van
                        jongeren die anders onder de radar blijven en kunnen op
                        basis van deze signalen de hulpmiddelen inschakelen die
                        bij de jongeren passen.
                    </p>

                    <p>
                        KIR streeft naar een goede inbedding van het programma
                        in de werkwijze van de school en borging van de signalen
                        die worden opgevangen door de workshopleiders en
                        coaches. Om de activiteiten van KIR geen eendagsvlieg te
                        laten zijn, is de voorbereiding met de school en keten
                        erg belangrijk, middels het formuleren van een
                        gezamenlijke missie en doelsteling.
                    </p>

                    <p>
                        Hoewel de activiteiten van KIR een vertrouwde bubbel
                        vormen waarin de jongeren hun verhaal kunnen doen, wordt
                        de gehele keten idealiter meegenomen in de werkwijze
                        (van docenten tot jongerenwerkers en hulpverleners).
                        Wens is dat zij geïnformeerd en betrokken worden bij de
                        activiteiten van de KIR-activiteiten. Hun taak is om,
                        ook als het KIR team niet meer betrokken is, thema’s die
                        daar behandeld zijn aandacht te blijven geven. Daarnaast
                        kan er bij signalering van heftige problematiek
                        doorverwezen worden naar de ketenpartners voor verdere
                        ondersteuning. De school, politie, jongerenwerk en
                        straatcoaches kunnen een mooie rol hebben om de KIR
                        workshops een plek te geven in de dagelijkse gang van
                        zaken.
                    </p>
                </div>
                <div>
                    <h2>Wat doet KIR onder andere?</h2>
                    <h3>KIR Takeovers</h3>
                    <p>
                        Een KIR dag is een ervaring! Het doel van de
                        “experience” is om jongeren en jong volwassenen middels
                        kunst, fashion, het maken van beats, muziek, sport en
                        veel persoonlijke verhalen en ervaringen te inspireren
                        om de juiste keuzes maken. Het team neemt voor een dag
                        de lessen “over”. Afhankelijk van het aantal leerlingen,
                        grootte van de klassen en het niveau van de kinderen
                        worden er workshops georganiseerd. Aanwezig in de
                        workshop zijn in principe alleen de workshophouders en
                        de leerlingen, op deze manier creëren we een veilige
                        omgeving voor de leerlingen om te bespreken wat ze
                        willen. De dag wordt plenair geopend door bijvoorbeeld
                        de school(directeur) en het team, in aanwezigheid van
                        netwerkpartners. De dag wordt ook op deze manier
                        afgesloten, vaak met veel dank van het team aan de
                        leerlingen voor hun openheid. Het is een leuke dag
                        waarbij de leerlingen een dag niet uit boeken hoeven te
                        leren maar door zelf te praten, na te denken of te
                        “doen“ onder begeleiding van het team.
                    </p>

                    <p>
                        Wel vaker staan ex-gedetineerden voor een schoolklas om
                        als ervaringsdeskundigen uit te leggen waarom leerlingen
                        het juiste pad moeten kiezen, maar de line up van KIR is
                        uitzonderlijk. Veteranen uit het hardste straatleven
                        werken samen met muziekproducenten, jongerenwerkers en
                        docenten die ook in jeugdgevangenissen workshops geven.
                        Ze komen naar precies die scholen waar de kwetsbaarste
                        jongeren zitten. In de sessies herkennen de jongeren
                        zichzelf: zij voelen zich erkend, gezien, gehoord en
                        gewaardeerd om hun talenten. Ze zien in de rolmodellen
                        het succesverhaal dat zij zelf ook graag zouden willen
                        zijn. De sfeer is open en toegankelijk en sluit aan bij
                        de belevingswereld van de leerling. Het taalgebruik naar
                        de leerling is laagdrempelig, authentiek en respectvol.
                        De leerlingen willen aan het einde van de dag graag nog
                        een keer een KIR sessie bijwonen.
                        <br />
                        <br />
                        Bekijk hieronder een impressie van de KIR dagen op beide
                        scholen:
                    </p>

                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube-nocookie.com/embed/ErKTVPbeUJ0?si=lx2uqQABSI7C-yKf"
                        title="Keep It Real De Dreef 2023"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        loading="lazy"
                        className="youtube w-margin"
                    />

                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube-nocookie.com/embed/OVvH0tBxjCw?si=UHcn51Fa-EtqNCpQ"
                        title="Keep It Real Orion College Zuidoost 2023"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        loading="lazy"
                        className="youtube w-margin"
                    />
                </div>

                <div>
                    <h2>Teamleden</h2>
                    <div>
                        <div>
                            <StaticImage
                                src="../images/team/Bradley.jpg"
                                alt="Bradley"
                            />
                            <h3>Bradley</h3>
                        </div>
                        <div>
                            <StaticImage src="../images/team/FI.jpg" alt="FI" />
                            <h3>FI</h3>
                        </div>
                        <div>
                            <StaticImage
                                src="../images/team/Franco.jpg"
                                alt="Franco"
                            />
                            <h3>Franco</h3>
                        </div>
                        <div>
                            <StaticImage
                                src="../images/team/Jamina.jpg"
                                alt="Jamina"
                            />
                            <h3>Jamina</h3>
                        </div>
                        <div>
                            <StaticImage
                                src="../images/team/Jantien.jpg"
                                alt="Jantien"
                            />
                            <h3>Jantien</h3>
                        </div>
                        <div>
                            <StaticImage
                                src="../images/team/Kaleisha.jpg"
                                alt="Kaleisha"
                            />
                            <h3>Kaleisha</h3>
                        </div>
                        <div>
                            <StaticImage
                                src="../images/team/Kenny.jpg"
                                alt="Kenny"
                            />
                            <h3>Kenny</h3>
                        </div>
                        <div>
                            <StaticImage
                                src="../images/team/Kimberley.jpg"
                                alt="Kimberley"
                            />
                            <h3>Kimberley</h3>
                        </div>
                        <div>
                            <StaticImage
                                src="../images/team/Melanie.jpg"
                                alt="Melanie"
                            />
                            <h3>Melanie</h3>
                        </div>
                        <div>
                            <StaticImage
                                src="../images/team/Merlien.jpg"
                                alt="Merlien"
                            />
                            <h3>Merlien</h3>
                        </div>
                        <div>
                            <StaticImage
                                src="../images/team/Miller.jpg"
                                alt="Miller"
                            />
                            <h3>Miller</h3>
                        </div>
                        <div>
                            <StaticImage
                                src="../images/team/Wenner.jpg"
                                alt="Wenner"
                            />
                            <h3>Wenner</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AboutUsPage;

export const Head: HeadFC = () => (
    <Seo
        title="Over Ons"
        pathname="/over-ons/"
        description="Keep It Real (KIR) biedt impactvolle workshops en coaching door ervaringsdeskundigen. Voor jongeren, scholen en professionals die verschil willen maken."
    />
);
