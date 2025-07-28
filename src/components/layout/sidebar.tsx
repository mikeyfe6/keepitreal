import React, { useState } from "react";

import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useSrcImages } from "../../hooks/use-src-image";

import LightBox from "../utils/lightbox";
import Modal from "../utils/modal";
import EventForm from "../forms/eventForm";

import * as sidebarStyles from "../../styles/modules/layout/sidebar.module.scss";

interface SidebarProps {
    handleSidebarClick: (sectionId: string) => void;
    activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({
    handleSidebarClick,
    activeSection,
}) => {
    const {
        // omarmprijs,
        backToSchool,
        flexZijn,
        kunstEnCultuur,
    } = useSrcImages();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [countdown, setCountdown] = useState(5);

    const handleOpenModal = () => {
        setIsModalOpen(true);
        setShowSuccessMessage(false);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setShowSuccessMessage(false);
        setCountdown(5);
    };

    const handleRegistrationSuccess = () => {
        setShowSuccessMessage(true);
        setCountdown(5);

        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    setIsModalOpen(false);
                    setShowSuccessMessage(false);
                    setCountdown(5);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    return (
        <>
            <aside className={sidebarStyles.aside}>
                <div id="events" className={sidebarStyles.asideEvents}>
                    <h3>Opkomende evenementen</h3>

                    <ul className={sidebarStyles.asideEventsActive}>
                        <li>
                            <LightBox
                                image={backToSchool}
                                alt="Back to School - Flyer - Dinsdag 27 mei 2025 @ Flexbieb, Talbotstraat 46 in IJburg"
                            />

                            <button onClick={handleOpenModal}>
                                Aanmelden voor Back to School
                            </button>
                        </li>
                    </ul>

                    <hr />

                    <h3>Afgelopen evenementen</h3>

                    <ul className={sidebarStyles.asideEventsArchive}>
                        <li>
                            <LightBox
                                image={flexZijn}
                                alt="Flex Zijn - Wenner Regales - Dinsdag 27 mei 2025 @ Flexbieb, Talbotstraat 46 in IJburg"
                            />
                        </li>
                        <li>
                            <LightBox
                                image={kunstEnCultuur}
                                alt="Kunst En Cultuurmarkt - Zaterdag 12 april 2025 @ Zandkasteel, Amsterdam Zuidoost"
                            />
                        </li>
                    </ul>
                </div>

                <div id="podcast">
                    <iframe
                        title="Keep It Real Podcast"
                        src="https://open.spotify.com/embed/show/7wDDGz0HtXhn3WPCJ3KLcO?utm_source=generator"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className="spotify"
                    />
                </div>

                <div id="legend" className={sidebarStyles.asideLegend}>
                    <h3>KiR</h3>
                    <ul>
                        <li>
                            <button
                                onClick={() => handleSidebarClick("mission")}
                                className={
                                    activeSection === "mission" ?
                                        sidebarStyles.active
                                    :   ""
                                }
                            >
                                Onze Missie
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleSidebarClick("whatwedo")}
                                className={
                                    activeSection === "whatwedo" ?
                                        sidebarStyles.active
                                    :   ""
                                }
                            >
                                <u>Wat We Doen</u>
                            </button>
                            <ul>
                                <li>
                                    <h4>KIR Take-overs</h4>
                                </li>
                                <li>
                                    <h4>KIR Workshops</h4>
                                </li>
                                <li>
                                    <h4>1-op-1 Coaching</h4>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button
                                onClick={() => handleSidebarClick("ourteam")}
                                className={
                                    activeSection === "ourteam" ?
                                        sidebarStyles.active
                                    :   ""
                                }
                            >
                                Onze Teamleden
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleSidebarClick("impact")}
                                className={
                                    activeSection === "impact" ?
                                        sidebarStyles.active
                                    :   ""
                                }
                            >
                                Impact en Toekomst
                            </button>
                        </li>
                    </ul>
                </div>

                {/* <div id="actual" className={sidebarStyles.asideActual}>
                    <p>
                        <strong>
                            Keep It Real is genomineerd voor de OMARMprijs en we
                            hebben jouw stem nodig! Tell a friend to tell a
                            friend.
                        </strong>
                    </p>
                    <p>
                        Tot <u>9 juli 2025</u> kan jij stemmen op Keep It Real.
                        Wij geloven in talenten, kansen en de kracht van de
                        volgende generatie en begeleiden en helpen jongeren bij
                        het nemen van de regie over hun leven.
                    </p>
                    <p>
                        📅 De winnaar wordt bekendgemaakt op donderdag 16
                        oktober.
                    </p>
                    <a
                        href="https://www.pact-amsterdam.nl"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Klik hier om jouw stem uit te brengen
                    </a>
                    <LightBox
                        image={omarmprijs}
                        alt="Omarmprijs 2025 - Stem op Keep It Real!"
                    />
                </div> */}

                <div id="contact" className={sidebarStyles.asideContact}>
                    <h3>Word Lid van Keep It Real</h3>

                    <p>
                        Wil je deel uitmaken van ons team of meer informatie
                        over onze programma's?
                    </p>

                    <p>
                        Neem <Link to="/contact">contact</Link> met ons op via
                        onze website of sociale media. Samen kunnen we het
                        verschil maken voor de jongeren van vandaag en morgen.{" "}
                        <strong>Keep it real!</strong>
                    </p>
                </div>

                <div id="media" className={sidebarStyles.asideMedia}>
                    <h3>In de media</h3>

                    <ul>
                        <li>
                            <a
                                href="https://www.parool.nl/amsterdam/ex-gedetineerden-motiveren-leerlingen-in-zuidoost-om-op-het-rechte-pad-te-blijven-je-bent-geen-pussy-als-je-nee-zegt~b2fdfa0b/?referrer=https://www.google.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Artikel Parool: "Keep It Real: Een uniek
                                initiatief voor jongeren"{" "}
                                <FontAwesomeIcon
                                    icon={"square-arrow-up-right"}
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>

            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                title={
                    showSuccessMessage ? "" : "Aanmelden voor Back to School"
                }
            >
                {showSuccessMessage ?
                    <div>
                        <h3>
                            {" "}
                            <FontAwesomeIcon icon={"circle-check"} /> Aanmelding
                            verstuurd!
                        </h3>
                        <p>Check je mail voor een bevestiging!</p>
                        <small>
                            Deze popup verdwijnt over {countdown} seconde
                            {countdown !== 1 ? "n" : ""}...
                        </small>
                    </div>
                :   <div>
                        <p>Vul het formulier hieronder in *</p>
                        <EventForm
                            onSuccess={handleRegistrationSuccess}
                            eventName="Back to School"
                        />
                    </div>
                }
            </Modal>
        </>
    );
};

export default Sidebar;
