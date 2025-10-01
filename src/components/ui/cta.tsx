import React, { useEffect, useState } from "react";

import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as ctaStyles from "../../styles/modules/ui/cta.module.scss";

interface Workshop {
    name: string;
    description: string;
    anchor?: string;
}

interface OverlayProps {
    item: Workshop;
    onClose: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ item, onClose }) => (
    <div className={ctaStyles.ctaOverlay}>
        <div className={ctaStyles.ctaOverlayContent}>
            <div>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
            </div>

            <div>
                {/* <Link to={`/workshops/#${item.anchor}`}>Meer informatie</Link> */}
                <button onClick={onClose}>
                    <FontAwesomeIcon icon={"xmark"} size="xl" />
                </button>
            </div>
        </div>
    </div>
);

const Cta: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<Workshop | null>(null);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const workshops: Workshop[] = [
        {
            name: "Genge",
            description:
                "Een therapeutische groepsles waarin tekenen wordt gebruikt als middel. De workshop behandelt thema's zoals verleidingen, keuzes en weerbaarheid, aangepast aan de behoeften van de groep.",
            anchor: "genge",
        },
        {
            name: "Oorzaak-Gevolg",
            description:
                "Deze sessies gaan dieper in op het straatleven vanuit het perspectief van jongeren. Er wordt gebruik gemaakt van persoonlijke levenservaringen om jongeren te motiveren om op het rechte pad te blijven.",
            anchor: "oorzaak-gevolg",
        },
        {
            name: "Identiteit",
            description:
                "Gericht op preventie voor jongeren, maar ook toepasbaar op leraren en ouders. Onderwerpen zijn onder andere zelfontdekking, weerbaarheid, groepsdruk, grenzen stellen en veiligheid op sociale media.",
            anchor: "identiteit",
        },
        {
            name: "Beats by the Pound",
            description:
                "Jongeren werken samen met muziekproducenten om beats te maken, teksten te schrijven en zich creatief te uiten. Thema's die in de workshops worden behandeld, variëren en kunnen zich richten op onderwerpen als sexting, ruzies of liefde.",
            anchor: "beats-by-the-pound",
        },
        {
            name: "Oya Talks",
            description:
                "Interactieve sessies gebaseerd op het (straat)leven, waarbij stellingen worden gebruikt om dialogen te voeren over liefde, veiligheid, discriminatie en mentale gezondheid.",
            anchor: "oya-talks",
        },
        {
            name: "Drill 101",
            description:
                "Een diepgaande analyse van de drillcultuur, waarbij jongeren klassikale dialogen voeren over de rol van de media en de impact van drill in de echte wereld.",
            anchor: "drill-101",
        },
        {
            name: "Drum / Muziek",
            description:
                "Jongeren leren hun emoties uiten door middel van muziek en beweging. Drummen wordt gebruikt als een therapeutisch middel om stress te verminderen en de mentale gezondheid te versterken.",
            anchor: "drum-muziek",
        },
        {
            name: "Online weerbaarheid",
            description:
                "Diepgaande besprekingen over online uitdagingen zoals shaming, sexting en online pesten, om jongeren bewust te maken van de risico's en hen te helpen zichzelf te beschermen.",
            anchor: "online-weerbaarheid",
        },
        {
            name: "Social Media",
            description:
                "Een veilige ruimte waarin jongeren kunnen praten over de werkelijkheid achter sociale media, met aandacht voor onderwerpen als body shaming, intimidatie en online veiligheid.",
            anchor: "social-media",
        },
        {
            name: "Fashion and Identity",
            description:
                "Creatieve workshops waarin jongeren hun eigen identiteit kunnen verkennen en trots kunnen zijn op hun creatieve expressie.",
            anchor: "fashion-and-identity",
        },
        {
            name: "Sport",
            description:
                "Sessies gericht op mentale gezondheid, discipline en een gezonde levensstijl, waarbij de nadruk ligt op het belang van een gezond lichaam en geest.",
            anchor: "sport",
        },
        {
            name: "Spoken Word",
            description:
                "Door middel van storytelling worden actuele thema's aangekaart, zoals zelfdoding, om jongeren aan te moedigen open te zijn over hun emoties en ervaringen.",
            anchor: "spoken-word",
        },
    ];

    useEffect(() => {}, []);

    return (
        <section>
            <div className={ctaStyles.ctaWrapper} id="cta">
                <ul>
                    {workshops.map((workshop, index) => (
                        <li key={index}>
                            <button
                                onClick={() => {
                                    setSelectedItem(workshop);
                                    setIsOverlayVisible(true);
                                }}
                            >
                                {workshop.name}
                            </button>
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
