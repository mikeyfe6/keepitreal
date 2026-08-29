import React, { useState } from "react";

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
                <Link to={`/workshops/aanbod-scholen/#${item.anchor}`}>Meer informatie</Link>
                <button onClick={onClose} type="button">
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
            name: "Fashion & Identiteit",
            description:
                "Tijdens deze workshop ontdekken jongeren de verbinding tussen fashion, identiteit en zelfexpressie. Met styling, moodboards en een eigen kledingconcept denken zij na over hun stijl, persoonlijkheid en uitstraling.",
            anchor: "fashion",
        },
        {
            name: "Identiteit – Wie ben ik?",
            description:
                "Tijdens deze workshop ontdekken kinderen op een leuke en veilige manier meer over zichzelf. Met creatieve opdrachten, spelletjes en gesprekken staan we stil bij kwaliteiten, gevoelens, zelfvertrouwen, grenzen en de invloed van anderen.",
            anchor: "wie-ben-ik",
        },
        {
            name: "Kunst",
            description:
                "Tijdens deze workshops gaan jongeren creatief aan de slag met verschillende opdrachten. Door te creëren, samen te werken en soms buiten hun comfortzone te stappen, krijgen zij meer inzicht in hun gevoelens, gedrag en reacties.",
            anchor: "kunst",
        },
        {
            name: "Meidenvenijn – Samen sterk",
            description:
                "Tijdens deze interactieve workshop ontdekken meiden meer over vriendschap, groepsgedrag en hun eigen rol binnen een groep. Met spellen, gesprekken en herkenbare situaties oefenen ze met grenzen aangeven, voor zichzelf opkomen en omgaan met conflicten.",
            anchor: "samensterk",
        },
        {
            name: "Muziek",
            description:
                "Tijdens deze workshop werken jongeren samen aan een eigen nummer. Van tekst schrijven en beats kiezen of maken tot vocals opnemen en het eindproduct uitwerken: zij doorlopen het volledige creatieve proces.",
            anchor: "muziek",
        },
        {
            name: "Online Weerbaarheid – Slim en sterk online",
            description:
                "Tijdens deze workshop leren kinderen bewuster, veiliger en sterker omgaan met social media, games en andere online omgevingen. We bespreken onder andere groepsdruk, privacy, online pesten, influencers en persoonlijke grenzen.",
            anchor: "online-weerbaarheid",
        },
        {
            name: "Oorzaak & Gevolg",
            description:
                "Tijdens deze workshopreeks leren jongeren inzicht krijgen in hun gedrag, keuzes en de gevolgen daarvan. Met herkenbare situaties, sport, beweging en samenwerking oefenen zij met zelfbeheersing, omgaan met spanning, verantwoordelijkheid en bewuste keuzes.",
            anchor: "oorzaak-gevolg",
        },
        {
            name: "Oya Talks",
            description:
                "Tijdens ‘Oya Talks’ gaan jongeren met elkaar in gesprek over thema’s die dicht bij hun leefwereld staan. Aan de hand van stellingen en herkenbare situaties bespreken we onderwerpen als liefde, discriminatie, thuissituatie, vriendengroepen, groepsdruk en (on)veilige situaties.",
            anchor: "oya-talks",
        },
        {
            name: "Sport",
            description:
                "Tijdens de sportworkshop gaan jongeren actief aan de slag met verschillende sport- en bewegingsactiviteiten. Sport wordt ingezet om niet alleen fysiek, maar ook mentaal en sociaal te groeien.",
            anchor: "sport",
        },
    ];

    return (
        <section>
            <div className={ctaStyles.ctaWrapper} id="cta">
                <ul>
                    {workshops.map((workshop) => (
                        <li key={workshop.anchor ?? workshop.name}>
                            <button
                                type="button"
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
                    <Overlay item={selectedItem} onClose={() => setIsOverlayVisible(false)} />
                )}
            </div>
        </section>
    );
};

export default Cta;
