import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as footerStyles from "../../styles/modules/layout/footer.module.scss";

const Footer: React.FC = () => {
    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.footerContainer}>
                <p>© 2024 - Keep It Real </p>
                <ul>
                    <li>
                        <a
                            href="https://www.instagram.com/keepitrealkir"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={["fab", "instagram"]}
                                size="xl"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.facebook.com/profile.php?id=61559466671196"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={["fab", "facebook"]}
                                size="lg"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.tiktok.com/@keepitreal_nl"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={["fab", "tiktok"]}
                                size="lg"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@keepitreal_de_podcast"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={["fab", "youtube"]}
                                size="lg"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://open.spotify.com/show/7wDDGz0HtXhn3WPCJ3KLcO?si=80196a51f4e4423d"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={["fab", "spotify"]}
                                size="lg"
                            />
                        </a>
                    </li>
                </ul>

                <p>
                    Webcrafted by{" "}
                    <a
                        href="https://menefex.nl"
                        rel="noopener noreferrer"
                        target="_blank"
                        className={footerStyles.menefex}
                    >
                        Menefex
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
