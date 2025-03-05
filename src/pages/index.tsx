import React, { useRef, useState } from "react";

import type { HeadFC, PageProps } from "gatsby";

import Layout from "../components/layout";
import Cta from "../components/ui/cta";
import Sidebar from "../components/ui/sidebar";

import { Seo } from "../components/seo";

import * as indexStyles from "../styles/modules/pages/index.module.scss";

const IndexPage: React.FC<PageProps> = () => {
    const missionRef = useRef<HTMLDivElement>(null!);
    const whatwedoRef = useRef<HTMLDivElement>(null!);
    const ourteamRef = useRef<HTMLDivElement>(null!);
    const impactRef = useRef<HTMLDivElement>(null!);

    const [activeSection, setActiveSection] = useState<string>("");

    const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            const yOffset = -167.5;
            const element = ref.current;
            const y =
                element.getBoundingClientRect().top + window.scrollY + yOffset;

            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    const handleSidebarClick = (sectionId: string) => {
        setActiveSection(sectionId);
        const sections: Record<string, React.RefObject<HTMLDivElement>> = {
            mission: missionRef,
            whatwedo: whatwedoRef,
            ourteam: ourteamRef,
            impact: impactRef,
        };
        if (sections[sectionId]?.current) {
            handleScroll(sections[sectionId]);
        }
    };

    return (
        <Layout>
            <div className={indexStyles.index}>
                <div>
                    <p>
                        Welkom bij <strong>Keep It Real</strong>, een programma
                        dat jongeren een ervaring biedt die verder gaat dan
                        traditioneel onderwijs. Ontstaan uit de visie van
                        cultureel professional Wenner Regales, is Keep It Real
                        een initiatief dat jongeren ondersteunt bij het maken
                        van positieve keuzes en het grijpen van kansen. Geboren
                        op Curaçao en deels opgegroeid in Amsterdam, begrijpt
                        Wenner de uitdagingen waar jongeren mee te maken hebben.
                        Zijn ervaring en netwerk hebben geleid tot de oprichting
                        van Keep It Real.
                    </p>
                </div>
                <div
                    ref={missionRef}
                    className={
                        activeSection === "mission" ? indexStyles.active : ""
                    }
                >
                    <h2>Onze Missie</h2>
                    <p>
                        Bij Keep It Real geloven we in het belang van echte
                        ervaringen. Geen standaardlessen, maar een dag vol
                        inspiratie, interactie en empowerment. Onze
                        ervaringsdeskundige teamleden delen hun levensverhalen
                        en begeleiden workshops, waarbij thema's als veiligheid,
                        identiteit, en sociale druk worden behandeld.
                    </p>
                </div>

                <div
                    ref={whatwedoRef}
                    className={
                        activeSection === "whatwedo" ? indexStyles.active : ""
                    }
                >
                    <h2>Wat We Doen</h2>
                    <ol>
                        <li>
                            <h4>KIR Take-overs</h4>
                            <p>
                                Een dag waarop onze teamleden de reguliere
                                lessen overnemen. Door middel van kunst, muziek,
                                sport en persoonlijke verhalen inspireren we
                                jongeren om positieve keuzes te maken.
                            </p>
                        </li>
                        <li>
                            <h4>KIR Workshops</h4>
                            <p>
                                Diepgaande sessies waarin jongeren hun
                                creativiteit kunnen uiten en thema's kunnen
                                verkennen zoals verleidingen, identiteit, en
                                online veiligheid. Van therapeutische
                                tekenlessen tot muziekproductie-workshops, we
                                bieden een breed scala aan mogelijkheden.
                            </p>

                            <Cta />
                        </li>
                        <li>
                            <h4>1-op-1 Coaching</h4>
                            <p>
                                Specifieke ondersteuning voor leerlingen die dat
                                nodig hebben, om hen te helpen bij het nemen van
                                de regie over hun leven.
                            </p>
                        </li>
                    </ol>

                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/v8i5Z0x0rwc?si=BStmnNjZ-vZQPNBV"
                        title="Amsterdammer van het Jaar: Wenner Regales"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        loading="lazy"
                        className="youtube w-margin"
                    />
                </div>

                <div
                    ref={ourteamRef}
                    className={
                        activeSection === "ourteam" ? indexStyles.active : ""
                    }
                >
                    <h2>Teamleden</h2>
                    <p>
                        Ons diverse team van ervaringsdeskundigen deelt een
                        passie voor het begeleiden van jongeren. Van voormalige
                        straatlegendes tot ervaren jongerenwerkers, elk teamlid
                        brengt unieke kennis en expertise.
                    </p>
                </div>

                <div
                    ref={impactRef}
                    className={
                        activeSection === "impact" ? indexStyles.active : ""
                    }
                >
                    <h2>Impact en Toekomst</h2>
                    <p>
                        Keep It Real streeft naar een blijvende impact. We
                        werken samen met scholen en andere partners om ons
                        programma te integreren in het curriculum en de bredere
                        gemeenschap. Onze ambities reiken verder dan alleen
                        workshops; we willen een cultuur van empowerment creëren
                        die jongeren helpt om hun volledige potentieel te
                        bereiken.
                    </p>
                </div>

                <div>
                    <h2>Beluister onze Podcast</h2>
                    <p>
                        Wil je meer horen over de verhalen achter Keep It Real
                        en de inspirerende mensen die deel uitmaken van ons
                        team? Luister dan naar onze podcast! Hier delen we
                        persoonlijke ervaringen, succesverhalen en diepgaande
                        gesprekken over onderwerpen die jongeren aan het hart
                        gaan.
                    </p>

                    <iframe
                        title="Keep It Real Podcast"
                        src="https://open.spotify.com/embed/show/7wDDGz0HtXhn3WPCJ3KLcO?utm_source=generator"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className="spotify w-margin"
                    />

                    <p>
                        Abonneer je op onze podcast via jouw favoriete platform
                        en blijf op de hoogte van de laatste afleveringen.{" "}
                        <strong>Keep it real</strong> en luister mee!
                    </p>
                </div>
            </div>
            <Sidebar
                handleSidebarClick={handleSidebarClick}
                activeSection={activeSection}
            />
        </Layout>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo />;
