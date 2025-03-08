import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useSiteMetadata } from "../../hooks/use-site-metadata";

import * as footerStyles from "../../styles/modules/layout/footer.module.scss";

const Footer: React.FC = () => {
    const { facebookUrl, instagramUrl, tiktokUrl, youtubeUrl, spotifyUrl } =
        useSiteMetadata();

    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.footerContainer}>
                <p>© 2024 - Keep It Real </p>
                <ul>
                    <li>
                        <a
                            href={instagramUrl}
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
                            href={facebookUrl}
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
                            href={tiktokUrl}
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
                            href={youtubeUrl}
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
                            href={spotifyUrl}
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
