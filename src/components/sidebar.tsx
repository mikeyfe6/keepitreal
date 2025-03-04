import * as React from "react";

import * as sidebarStyles from "../styles/modules/layout/sidebar.module.scss";

interface SidebarProps {
    handleSidebarClick: (sectionId: string) => void;
    activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({
    handleSidebarClick,
    activeSection,
}) => {
    return (
        <aside className={sidebarStyles.aside}>
            <div>
                <h3>KiR</h3>
                <ul>
                    <li>
                        <button
                            onClick={() => handleSidebarClick("mission")}
                            className={
                                activeSection === "mission"
                                    ? sidebarStyles.active
                                    : ""
                            }
                        >
                            Onze Missie
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleSidebarClick("whatwedo")}
                            className={
                                activeSection === "whatwedo"
                                    ? sidebarStyles.active
                                    : ""
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
                                activeSection === "ourteam"
                                    ? sidebarStyles.active
                                    : ""
                            }
                        >
                            Onze Teamleden
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleSidebarClick("impact")}
                            className={
                                activeSection === "impact"
                                    ? sidebarStyles.active
                                    : ""
                            }
                        >
                            Impact en Toekomst
                        </button>
                    </li>
                </ul>
            </div>

            <div id="events">
                <h3>Opkomende evenementen</h3>

                <ul>
                    <li>
                        {/* <p>
							<strong>plaats</strong>: locatie
						</p>
						<p>
							<strong>tijd/datum:</strong> 12:00 - 16:00, 01-01-2022
						</p> */}
                        <p>Stay tuned...</p>
                    </li>
                </ul>
            </div>

            <div>
                <iframe
                    title="Keep It Real Podcast"
                    src="https://open.spotify.com/embed/show/7wDDGz0HtXhn3WPCJ3KLcO?utm_source=generator"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    // loading='lazy'
                    className="spotify"
                />
            </div>

            <div>
                <h3>Word Lid van Keep It Real</h3>

                <p>
                    Wil je deel uitmaken van ons team of meer informatie over
                    onze programma's?
                </p>

                <p>
                    Neem contact met ons op via onze website of sociale media.
                    Samen kunnen we het verschil maken voor de jongeren van
                    vandaag en morgen. <strong>Keep it real!</strong>
                </p>
            </div>

            <div id="media">
                <h3>In de media</h3>

                <ul>
                    <li>
                        <a
                            href="https://www.parool.nl/amsterdam/ex-gedetineerden-motiveren-leerlingen-in-zuidoost-om-op-het-rechte-pad-te-blijven-je-bent-geen-pussy-als-je-nee-zegt~b2fdfa0b/?referrer=https://www.google.com/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Artikel Parool: "Keep It Real: Een uniek initiatief
                            voor jongeren"{" "}
                            <i className="fa-solid fa-square-arrow-up-right" />
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
